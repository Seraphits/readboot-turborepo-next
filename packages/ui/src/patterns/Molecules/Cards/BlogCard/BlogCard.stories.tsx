import type { Meta, StoryObj } from "@storybook/react";
import {
  blogFeaturedPlaceholder,
  placeholderSrc,
} from "../../../../assets/storybook/placeholders";
import { BlogCard } from "./BlogCard";
import type { Post } from "@repo/wp-utils";

const meta: Meta<typeof BlogCard> = {
  component: BlogCard,
};
export default meta;

const mockPost: Post = {
  id: "1",
  title: "Sample blog post title",
  excerpt: "Short neutral excerpt for the blog card layout preview.",
  slug: "sample-blog-post",
  date: "2026-03-16",
  content: "",
  featuredImage: {
    node: {
      sourceUrl: placeholderSrc(blogFeaturedPlaceholder),
      altText: "Featured image placeholder",
    },
  },
};

export const PostPreview: StoryObj<typeof BlogCard> = {
  render: () => (
    <div style={{ maxWidth: "400px" }}>
      <BlogCard post={mockPost} />
    </div>
  ),
};

const mockPostNoImage: Post = {
  ...mockPost,
  featuredImage: undefined,
};

/** No `featuredImage` — content column only (excerpt + link). */
export const PostPreviewNoFeaturedImage: StoryObj<typeof BlogCard> = {
  render: () => (
    <div style={{ maxWidth: "400px" }}>
      <BlogCard post={mockPostNoImage} />
    </div>
  ),
};
