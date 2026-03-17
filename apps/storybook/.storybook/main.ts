import type { StorybookConfig } from '@storybook/react-vite';

import { dirname } from "path";
import path from 'path';
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "../../..");
const packagesUiSrc = path.join(projectRoot, "packages/ui/src");

/** Strip "use client" so Vite can bundle Next.js client components in Storybook */
function stripUseClient() {
  return {
    name: 'strip-use-client',
    transform(code: string, id: string) {
      if (id.includes('node_modules')) return null;
      if (code.includes('"use client"') || code.includes("'use client'")) {
        return { code: code.replace(/^["']use client["'];\s*\n?/m, ''), map: null };
      }
      return null;
    },
  };
}

/**
* This function is used to resolve the absolute path of a package.
* It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value: string) {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}

const config: StorybookConfig = {
  stories: [
    `${packagesUiSrc}/**/*.stories.@(js|jsx|mjs|ts|tsx)`,
  ],
  addons: [
    ...(process.env.CHROMATIC_PROJECT_TOKEN
      ? [getAbsolutePath('@chromatic-com/storybook')]
      : []),
    // addon-vitest can cause vite-app.js 404 with Vite 7; re-enable when fixed
    // getAbsolutePath('@storybook/addon-vitest'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-themes'),
    getAbsolutePath('@storybook/addon-docs'),
  ],
  framework: getAbsolutePath('@storybook/react-vite'),
  staticDirs: ["../public"],
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    const packagesUiSrc = path.join(projectRoot, 'packages/ui/src');
    const packagesWpUtilsSrc = path.join(projectRoot, 'packages/wp-utils/src');
    return mergeConfig(config, {
      plugins: [...(config.plugins || []), stripUseClient()],
      define: {
        // Next.js internals (link, has-base-path) expect process.env in browser
        'process.env': JSON.stringify({}),
      },
      resolve: {
        alias: {
          'next/image': path.resolve(__dirname, 'next-image-mock.tsx'),
          'next/link': path.resolve(__dirname, 'next-link-mock.tsx'),
          'next/navigation': path.resolve(__dirname, 'next-navigation-mock.ts'),
          '@repo/ui/patterns': path.join(packagesUiSrc, 'patterns'),
          '@repo/ui/*': packagesUiSrc + '/',
          '@repo/ui': path.join(packagesUiSrc, 'index.tsx'),
          '@repo/wp-utils': path.join(packagesWpUtilsSrc, 'index.ts'),
          '@repo/wp-utils/*': packagesWpUtilsSrc + '/',
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            loadPaths: [path.join(packagesUiSrc, "patterns/Atoms")],
          },
        },
      },
      optimizeDeps: {
        include: [
          ...(config.optimizeDeps?.include ?? []),
          'react',
          'react-dom',
          'react/jsx-runtime',
          'react/jsx-dev-runtime',
        ],
      },
      server: {
        ...config.server,
        allowedHosts: true, // Bypass Vite 6 host security for local development
      },
    });
  },
};

export default config;
