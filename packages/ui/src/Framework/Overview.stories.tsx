import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  parameters: {
    docs: {
      description: {
        component: [
          "## Framework",
          "",
          "Global styles and greenfield UI primitives shipped via the **framework** export. Apps load the SCSS entry **once** at the root. Folders `Atoms/`, `Molecules/`, and `Organisms/` describe atomic **scale**, not product domains.",
          "",
          "### For developers",
          "",
          "- **Import:** use the public `framework` export from `@repo/ui` (no deep `src/` imports across packages). See `.cursor/rules/linking-standards.mdc`.",
          "- **Sass:** at-use tokens from `Tokens/…` with load path `packages/ui/src`.",
          "- **Next.js:** some widgets are client components; Storybook strips the client directive in previews.",
          "",
          "### Relationship",
          "",
          "- **`components/`** — feature UI re-exported for greenfield apps (often via `sites`).",
          "- **Wire frames (`patterns/`)** — legacy; do not add new coupling from Framework into `patterns/`.",
          "",
          "### Agent checklist",
          "",
          "- New global CSS or framework React lives under `packages/ui/src/Framework/`.",
          "- Do not introduce new `@repo/ui/styles/*` usage.",
          "- When a story exists in both Framework and Wire frames, prefer Framework for forward work unless migrating legacy.",
          "",
          "### Editing",
          "",
          "Edit `Overview.stories.tsx` or add colocated `*.stories.tsx` guides next to specific widgets.",
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
      Open the <strong>Docs</strong> tab for Framework folder rules and the agent checklist.
    </p>
  ),
};
