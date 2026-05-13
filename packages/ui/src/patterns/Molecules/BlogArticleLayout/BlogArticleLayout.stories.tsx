import type { Meta, StoryObj } from "@storybook/react";
import { BlogArticleLayout } from "./BlogArticleLayout";

const meta: Meta<typeof BlogArticleLayout> = {
  component: BlogArticleLayout,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Thin layout shell for article routes: wraps main column content in the blog article SCSS module root.",
      },
    },
  },
};
export default meta;

export const WithPlaceholderBody: StoryObj<typeof BlogArticleLayout> = {
  render: () => (
    <BlogArticleLayout>
      <p>Lead paragraph placeholder for column width and rhythm.</p>
      <p>Second paragraph to show vertical flow inside the shell.</p>
    </BlogArticleLayout>
  ),
};
