import type { NextConfig } from "next";
import path from "node:path"; // The 'node:' prefix is best practice for ESM
import { fileURLToPath } from "node:url";

// Polyfill __dirname for ESM context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/ui"],
  sassOptions: {
    // Nested correctly; loadPaths is the modern standard for Dart Sass/Turbopack
    includePaths: [path.join(__dirname, "../../packages/ui/src/styles")],
    loadPaths: [path.join(__dirname, "../../packages/ui/src/styles")],
  },
};

export default nextConfig;
