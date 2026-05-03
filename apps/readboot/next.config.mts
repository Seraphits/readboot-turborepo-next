import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  transpilePackages: ["@repo/wp-utils"],
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
