import type { NextConfig } from "next";
import path from "node:path"; // The 'node:' prefix is best practice for ESM
import { fileURLToPath } from "node:url";
import { withMicrofrontends } from '@vercel/microfrontends/next/config';

// Polyfill __dirname for ESM context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig: NextConfig = {
  trailingSlash: true,
  transpilePackages: ["@repo/ui", '@repo/wp-utils'],
  experimental: {
    optimizePackageImports: ["@repo/ui"],
  },
  async rewrites() {
    const isDev = process.env.NODE_ENV === 'development';
    const docsUrl = isDev ? 'http://localhost:3001' : 'https://readboot-turborepo-next-docs.vercel.app';
    const storybookUrl =
      process.env.STORYBOOK_DEPLOYMENT_URL ??
      (isDev ? 'http://localhost:6006' : 'https://readboot-turborepo-next-storybook.vercel.app');
    return [
      { source: '/docs/', destination: `${docsUrl}/docs/` },
      { source: '/docs/:path*/', destination: `${docsUrl}/docs/:path*/` },
      // Docs app assets (withMicrofrontends adds /vc-ap-* prefix)
      { source: '/vc-ap-:hash/:rest*/', destination: `${docsUrl}/vc-ap-:hash/:rest*` },
      // Storybook static app (must match Storybook Vite `base: /storybook/` — destination keeps /storybook prefix)
      { source: '/storybook/', destination: `${storybookUrl}/storybook/` },
      { source: '/storybook/:path*/', destination: `${storybookUrl}/storybook/:path*/` },
    ];
  },
  turbopack: {
    resolveAlias: {
      '@branding': path.join(__dirname, '../../packages/ui/src/patterns/Atoms/Branding'),
    },
  },
  sassOptions: {
    loadPaths: [
      path.join(__dirname, '../../packages/ui/src/patterns/Atoms'),
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'readboot.cloudaccess.host',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
    ],
  },
};

export default withMicrofrontends(nextConfig);
