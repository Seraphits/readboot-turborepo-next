import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  parameters: {
    docs: {
      description: {
        component: [
          "## Components",
          "",
          "Feature-grouped UI colocated with `*.module.scss` and `*.stories.*`. Greenfield apps consume shared pieces through **`@repo/ui/sites`** (re-exports from here).",
          "",
          "### For developers",
          "",
          "- Add folders under `packages/ui/src/components/<Feature>/` with TSX + module SCSS; export through `sites` (or the documented barrel).",
          "- At-use tokens from `Tokens/…` in modules; avoid hardcoded brand colors.",
          "- WordPress HTML in apps must go through **WPContent** from `@repo/wp-utils` on routes.",
          "",
          "### Agent checklist",
          "",
          "- New reusable UI for greenfield apps → `components/` (not `patterns/`).",
          "- Cross-package imports → `package.json` exports only.",
          "- After adding a component, add `*.stories.tsx` and optionally a colocated `Guide.stories.tsx` (see `ContentLibrary/Guide.stories.tsx`).",
          "",
          "### Editing",
          "",
          "Edit this overview or add per-feature guide stories under the feature folder.",
        ].join("\n"),
      },
    },
  },
} satisfies Meta;

export default meta;

export const Overview: StoryObj = {
  name: "Folder guide",
  render: () => (
    <p style={{ maxWidth: "42rem", lineHeight: 1.5 }}>
      Open the <strong>Docs</strong> tab for the Components folder contract and agent checklist.
    </p>
  ),
};
