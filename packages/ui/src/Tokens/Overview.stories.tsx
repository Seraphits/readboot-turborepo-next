import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  parameters: {
    docs: {
      description: {
        component: [
          "## Tokens",
          "",
          "Design tokens live here: Sass variables, maps, mixins, and small TS helpers. This tree is **not** a second global CSS bundle by itself—tokens apply when Framework or component modules load them via Sass **at-use** of these partials.",
          "",
          "### For developers",
          "",
          "- **Load path:** from `packages/ui/src`, at-use the `Tokens` barrel or a single partial under `Tokens/`. See `.cursor/rules/readboot-scss-architecture.mdc`.",
          "- **Stories** here demo color and pairing surfaces. Prefer neutral canvas copy; marketing copy belongs in apps.",
          "- **Do not** add a lowercase `tokens.scss` proxy next to the `Tokens/` folder (CI guardrail).",
          "",
          "### Agent checklist",
          "",
          "- New token SCSS belongs under `packages/ui/src/Tokens/` only (not `patterns/` or `styles/`).",
          "- Reuse the barrel `Tokens/_index.scss`; do not introduce a second token entry file.",
          "- Keep import paths and file names literal in generated code and reviews.",
          "",
          "### Editing",
          "",
          "Edit this `Overview.stories.tsx` file anytime. Add per-topic guides as additional `*.stories.tsx` or extend individual token stories.",
        ].join("\n"),
      },
    },
  },
} satisfies Meta;

export default meta;

/** Minimal canvas entry so the file is valid CSF; full guidance is in the Docs tab. */
export const Overview: StoryObj = {
  name: "Folder guide",
  render: () => (
    <p style={{ maxWidth: "42rem", lineHeight: 1.5 }}>
      Open the <strong>Docs</strong> tab for Tokens folder rules, agent checklist, and links to
      repository standards.
    </p>
  ),
};
