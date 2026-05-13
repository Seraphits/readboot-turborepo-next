import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  parameters: {
    docs: {
      description: {
        component: [
          "## Content library (example feature guide)",
          "",
          "ReadBoot library archive UI: list, filters, cards, article shell, sidebar nav. Keep structure complete and visuals minimal so apps own presentation.",
          "",
          "### For developers",
          "",
          "- Import from `@repo/ui/sites` (`ContentLibrary`, `ContentLibraryCard`, `ContentLibraryFilters`, `ContentMetaList`, `ContentArticle*`, `ContentSidebarNav`).",
          "- Types and queries live in `@repo/wp-utils`; normalize in the route and pass plain props.",
          "- Only pass sanitized or trusted HTML into excerpt fields that render `dangerouslySetInnerHTML`.",
          "",
          "### Agent checklist",
          "",
          "- WP category slug **readboot** for library posts (see `readboot-library-architecture.mdc`).",
          "- `articleType` and `theories` are normalized model fields, not WP tags.",
          "- Missing values should become **Unclassified** at the data layer so posts remain visible for cleanup.",
          "",
          "### Editing",
          "",
          "Copy this file as a template for other features (`Feature/Guide.stories.tsx`) and adjust bullets.",
        ].join("\n"),
      },
    },
  },
} satisfies Meta;

export default meta;

export const Guide: StoryObj = {
  name: "Feature guide",
  render: () => (
    <p style={{ maxWidth: "42rem", lineHeight: 1.5 }}>
      Example of a <strong>per-feature</strong> guide. Use the <strong>Docs</strong> tab for full
      notes; duplicate this file when onboarding a new component group.
    </p>
  ),
};
