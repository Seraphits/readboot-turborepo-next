import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/ui", "@repo/wp-utils"],
  turbopack: {
    resolveAlias: {
      '@branding': path.join(__dirname, '../../packages/ui/src/patterns/Atoms/BrandingAtoms'),
    },
  },
  sassOptions: {
    loadPaths: [
      path.join(__dirname, '../../packages/ui/src/patterns/Atoms'),
    ],
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "readboot.cloudaccess.host", pathname: "/**" },
      { hostname: "placehold.co", pathname: "/**" },
    ],
  },
};

export default nextConfig;
