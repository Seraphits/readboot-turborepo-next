import type { Meta, StoryObj } from "@storybook/react";
import {
  MOCK_POSTS,
  MOCK_PROJECTS,
} from "../../../assets/storybook/wpShowcaseMocks";
import { Showcase } from "./Showcase";

const meta: Meta<typeof Showcase> = {
  component: Showcase,
  parameters: {
    docs: {
      description: {
        component:
          'Grid of `ProjectCard` or `BlogCard` inside `SectionLayout` `variant="grid"`. Pass WP-shaped `items` + `type`.',
      },
    },
  },
};
export default meta;

export const FeaturedProjects: StoryObj<typeof Showcase> = {
  name: "Project cards",
  render: () => (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem" }}>
      <Showcase type="project" title="Featured work" items={MOCK_PROJECTS} />
    </div>
  ),
};

export const BlogPosts: StoryObj<typeof Showcase> = {
  name: "Blog cards",
  render: () => (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem" }}>
      <Showcase type="blog" title="From the blog" items={MOCK_POSTS} />
    </div>
  ),
};

export const WithoutSectionTitle: StoryObj<typeof Showcase> = {
  name: "No section title",
  render: () => (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem" }}>
      <Showcase type="project" items={MOCK_PROJECTS} />
    </div>
  ),
};
