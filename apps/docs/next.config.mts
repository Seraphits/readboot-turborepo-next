import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";
import { withMicrofrontends } from '@vercel/microfrontends/next/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/ui"],
  turbopack: {
    resolveAlias: {
      '@branding': './../../packages/ui/src/patterns/Atoms/BrandingAtoms/_index.scss',
    },
  },
  sassOptions: {
  loadPaths: [
      path.join(__dirname, '../../packages/ui/src/patterns/Atoms')
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'readboot.cloudaccess.host',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default withMicrofrontends(nextConfig);
