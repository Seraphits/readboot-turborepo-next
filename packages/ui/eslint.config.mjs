import { config } from "@repo/eslint-config/react-internal";
import storybook from "eslint-plugin-storybook";

/** @type {import("eslint").Linter.Config} */
export default [
  ...config,
  {
    files: ["**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)", "**/*.story.@(ts|tsx|js|jsx|mjs|cjs)"],
    plugins: { storybook },
    rules: {
      "storybook/no-title-property-in-meta": "error",
    },
  },
];
