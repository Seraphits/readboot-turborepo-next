import type { Meta, StoryObj } from "@storybook/react";
import { ContentArticleHeader } from "./ContentArticleHeader";

const meta: Meta<typeof ContentArticleHeader> = {
  component: ContentArticleHeader,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Article masthead: title, optional date, HTML excerpt, and `ContentMetaList` classifications.",
      },
    },
  },
};
export default meta;

export const TitleOnly: StoryObj<typeof ContentArticleHeader> = {
  args: {
    title: "Article title for layout preview",
  },
};

export const WithExcerptAndMeta: StoryObj<typeof ContentArticleHeader> = {
  args: {
    title: "Entry with excerpt and classifications",
    excerpt: "<p>Deck-style <strong>HTML</strong> excerpt.</p>",
    articleType: { value: "essay", label: "Essay" },
    theories: [{ value: "rbeos", label: "RBEOS" }],
    date: "2026-04-15",
    showDate: true,
  },
};
