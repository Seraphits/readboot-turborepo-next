import type { Meta, StoryObj } from "@storybook/react";
import { ContentMetaList } from "./ContentMetaList";

const meta: Meta<typeof ContentMetaList> = {
  component: ContentMetaList,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Definition list for article type and theories labels. Renders nothing when both are absent.",
      },
    },
  },
};
export default meta;

export const ArticleTypeOnly: StoryObj<typeof ContentMetaList> = {
  args: {
    articleType: { value: "essay", label: "Essay" },
    theories: [],
  },
};

export const TheoriesOnly: StoryObj<typeof ContentMetaList> = {
  args: {
    articleType: null,
    theories: [
      { value: "one", label: "First theory" },
      { value: "two", label: "Second theory" },
    ],
  },
};

export const FullMeta: StoryObj<typeof ContentMetaList> = {
  args: {
    articleType: { value: "brief", label: "Brief" },
    theories: [{ value: "rbeos", label: "RBEOS" }],
    articleTypeLabel: "Article type",
    theoriesLabel: "Theories",
  },
};
