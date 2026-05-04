import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  trailingSlash: true,
  transpilePackages: ["@repo/ui", "@repo/wp-utils"],
  experimental: {
    optimizePackageImports: ["@repo/ui"],
  },
  turbopack: {
    resolveAlias: {
      '@branding': path.join(__dirname, '../../packages/ui/src/patterns/Atoms/Branding'),
    },
  },
  sassOptions: {
    loadPaths: [
      path.join(__dirname, "../../packages/ui/src"),
      path.join(__dirname, "../../packages/ui/src/patterns/Atoms"),
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

export default nextConfig;
