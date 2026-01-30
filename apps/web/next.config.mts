import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/ui"],
  // Turbopack does not support sassOptions.includePaths / additionalData.
  // SCSS files use explicit @use with relative paths to @repo/ui variables.
};

export default nextConfig;
