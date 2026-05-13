import type { Meta, StoryObj } from "@storybook/react";
import { setStorybookPathnameOverride } from "../../../lib/storybookPathnameOverride";
import { BlogCategoryNav } from "./BlogCategoryNav";

const sampleCategories = [
  { slug: "design", name: "Design" },
  { slug: "engineering", name: "Engineering" },
];

const meta: Meta<typeof BlogCategoryNav> = {
  component: BlogCategoryNav,
  parameters: {
    layout: "padded",
    nextNavigation: { pathname: "/blog/" },
  },
  decorators: [
    (Story, context) => {
      const p = context.parameters?.nextNavigation?.pathname;
      setStorybookPathnameOverride(typeof p === "string" ? p : null);
      return <Story />;
    },
  ],
  args: {
    categories: sampleCategories,
    allLabel: "All posts",
    ariaLabel: "Blog categories",
  },
} satisfies Meta<typeof BlogCategoryNav>;

export default meta;
type Story = StoryObj<typeof BlogCategoryNav>;

export const AllPostsActive: Story = {
  parameters: {
    nextNavigation: { pathname: "/blog/" },
  },
};

export const CategoryActive: Story = {
  parameters: {
    nextNavigation: { pathname: "/blog/category/design/" },
  },
};
