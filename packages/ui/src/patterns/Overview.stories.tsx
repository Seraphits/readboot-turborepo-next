import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  parameters: {
    docs: {
      description: {
        component: [
          "## Wire frames (legacy `patterns/`)",
          "",
          "On disk this library is **`packages/ui/src/patterns/`**. Storybook labels the group **Wire frames** so previews read as layout and migration work.",
          "",
          "### For developers",
          "",
          "- Legacy apps may use `@repo/ui/atoms`, `molecules`, `organisms`, or `templates` (they resolve into `patterns/`).",
          "- **Greenfield Next apps** here must use `@repo/ui/framework` and `@repo/ui/sites` only for UI—ESLint enforces this.",
          "- See `.cursor/rules/deprecation-patterns-and-styles.mdc` and `greenfield-next-sites.mdc`.",
          "",
          "### Agent checklist",
          "",
          "- No new product code under `patterns/` or `styles/` unless the owner requested migration or removal.",
          "- No new Sass forwards from `patterns/**` or `styles/**` into `Tokens/`, `Framework/`, or `components/`.",
          "",
          "### Editing",
          "",
          "Edit this overview or add `Guide.stories.tsx` next to a specific legacy component.",
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
      Open the <strong>Docs</strong> tab for Wire frames folder rules (legacy patterns) and the agent
      checklist.
    </p>
  ),
};
