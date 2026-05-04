import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  trailingSlash: true,
  transpilePackages: ["@repo/ui", "@repo/wp-utils"],
  sassOptions: {
    loadPaths: [path.join(__dirname, "../../packages/ui/src")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "readboot.cloudaccess.host",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
