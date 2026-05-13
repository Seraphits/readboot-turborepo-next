import type { Meta, StoryObj } from "@storybook/react";
import { BlogSidebar } from "./BlogSidebar";

const meta: Meta<typeof BlogSidebar> = {
  component: BlogSidebar,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Aside rail of related links (e.g. other posts). Callers should omit the component when `items` is empty; it returns `null` in that case.",
      },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof BlogSidebar> = {
  args: {
    title: "More in this category",
    items: [
      { href: "/blog/post/alpha/", title: "Alpha post title" },
      { href: "/blog/post/beta/", title: "Beta post with a longer title line" },
      { href: "/blog/post/gamma/", title: "Gamma" },
    ],
  },
};
