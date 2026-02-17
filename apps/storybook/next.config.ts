import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@repo/ui"], // Use the name from packages/ui/package.json
  reactStrictMode: true,
};

export default nextConfig;
