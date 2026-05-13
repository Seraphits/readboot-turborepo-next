import type { StorybookConfig } from "@storybook/react-vite";

import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "../../..");
const packagesUiSrc = path.join(projectRoot, "packages/ui/src");
const tokensRoot = path.join(packagesUiSrc, "Tokens");
const frameworkRoot = path.join(packagesUiSrc, "Framework");
const wireframesRoot = path.join(packagesUiSrc, "patterns");
const componentsRoot = path.join(packagesUiSrc, "components");

/** Strip "use client" so Vite can bundle Next.js client components in Storybook */
function stripUseClient() {
  return {
    name: "strip-use-client",
    transform(code: string, id: string) {
      if (id.includes("node_modules")) return null;
      if (code.includes('"use client"') || code.includes("'use client'")) {
        return {
          code: code.replace(/^["']use client["'];\s*\n?/m, ""),
          map: null,
        };
      }
      return null;
    },
  };
}

/** Served at readboot.com/storybook via web rewrites + Vercel microfrontends. Set STORYBOOK_BASE_PATH="" for root (e.g. local quick dev). */
const storybookBase =
  process.env.STORYBOOK_BASE_PATH !== undefined
    ? process.env.STORYBOOK_BASE_PATH || "/"
    : "/storybook/";

const config: StorybookConfig = {
  /**
   * Story roots: `Tokens/`, `Framework/` (greenfield), then legacy `patterns/` under sidebar
   * **Wire frames** (not the folder name), plus `components/` when stories are colocated there.
   */
  stories: [
    {
      directory: tokensRoot,
      files: "**/*.stories.@(js|jsx|mjs|ts|tsx)",
      titlePrefix: "Tokens",
    },
    {
      directory: frameworkRoot,
      files: "**/*.stories.@(js|jsx|mjs|ts|tsx)",
      titlePrefix: "Framework",
    },
    {
      directory: wireframesRoot,
      files: "**/*.stories.@(js|jsx|mjs|ts|tsx)",
      titlePrefix: "Wire frames",
    },
    {
      directory: componentsRoot,
      files: "**/*.stories.@(js|jsx|mjs|ts|tsx)",
      titlePrefix: "Components",
    },
  ],
  addons: [
    ...(process.env.CHROMATIC_PROJECT_TOKEN
      ? ["@chromatic-com/storybook"]
      : []),
    // addon-vitest can cause vite-app.js 404 with Vite 7; re-enable when fixed
    // '@storybook/addon-vitest',
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  /** Shared UI branding; URLs like `/assets/branding/readboot-logo.png` */
  staticDirs: [
    { from: path.join(packagesUiSrc, "assets"), to: "/assets" },
    "../public",
  ],
  async viteFinal(config) {
    const { mergeConfig, searchForWorkspaceRoot } = await import("vite");
    const packagesUiSrcResolved = path.join(projectRoot, "packages/ui/src");

    return mergeConfig(config, {
      base: storybookBase,
      plugins: [
        ...(config.plugins ?? []),
        stripUseClient(),
        {
          name: "fix-double-encoding-patch",
          enforce: "pre",
          resolveId(id: string) {
            if (id.includes("virtual:") && id.includes("__x00__")) {
              return "\0" + id.replace(/^.*virtual:/, "virtual:");
            }
            return null;
          },
        },
        {
          name: "fix-double-encoding-url-middleware",
          configureServer(server) {
            server.middlewares.use((req, _res, next) => {
              if (req.url?.includes("@id/__x00__/@id/__x00__")) {
                req.url = req.url.replace(
                  /\/@id\/__x00__\/@id\/__x00__/g,
                  "/@id/__x00__",
                );
              }
              next();
            });
          },
        },
      ],
      define: {
        "process.env": JSON.stringify({}),
      },
      resolve: {
        alias: {
          "next/image": path.resolve(__dirname, "next-image-mock.tsx"),
          "next/link": path.resolve(__dirname, "next-link-mock.tsx"),
          "next/navigation": path.resolve(__dirname, "next-navigation-mock.ts"),
          // Do not alias `@repo/ui` to `src/` — breaks `package.json` exports (`molecules`, `organisms`, …).
          "@repo/wp-utils": path.resolve(projectRoot, "packages/wp-utils/src"),
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            loadPaths: [packagesUiSrcResolved],
            silenceDeprecations: ["global-builtin"],
          },
        },
      },
      optimizeDeps: {
        include: [
          ...(config.optimizeDeps?.include ?? []),
          "react",
          "react-dom",
          "react/jsx-runtime",
          "react/jsx-dev-runtime",
        ],
        exclude: ["@storybook/builder-vite", "@storybook/react-vite"],
      },
      server: {
        ...config.server,
        preTransformRequests: false,
        fs: {
          allow: [searchForWorkspaceRoot(projectRoot)],
        },
        allowedHosts: ["127.0.0.1", "localhost"],
      },
    });
  },
};

export default config;
