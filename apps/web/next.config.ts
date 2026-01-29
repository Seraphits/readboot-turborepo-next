import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/ui"], // Required for monorepo shared packages
  sassOptions: {
    // Allows @use "variables/colors" instead of long relative paths
    includePaths: [path.join(__dirname, "../../packages/ui/src/styles")],
    // Injects ReadBoot tokens into every.module.scss automatically
    additionalData: `
      @use "variables/colors" as *;
      @use "variables/typography" as *;
    `,
  },
};

export default nextConfig;
