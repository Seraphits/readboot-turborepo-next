import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";
import { withMicrofrontends } from '@vercel/microfrontends/next/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/ui"],
  sassOptions: {
    // This tells Sass: "If you can't find a file relatively, look here too"
    includePaths: [path.join(__dirname, "../../packages/ui/src/styles")],
    // loadPaths is the modern standard for Dart Sass/Turbopack
    loadPaths: [path.join(__dirname, "../../packages/ui/src/styles")],
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
