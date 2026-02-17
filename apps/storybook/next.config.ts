import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/ui"],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "readboot.cloudaccess.host", pathname: "/**" },
      { hostname: "placehold.co", pathname: "/**" },
    ],
  },
};

export default nextConfig;
