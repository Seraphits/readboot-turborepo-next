import type { Meta, StoryObj } from '@storybook/react';
import {
  blogFeaturedPlaceholder,
  placeholderSrc,
} from '../../../../assets/storybook/placeholders';
import { BlogCard } from './BlogCard';
import type { Post } from '@repo/wp-utils';

const meta: Meta<typeof BlogCard> = {
  component: BlogCard,
};
export default meta;

const mockPost: Post = {
  id: '1',
  title: 'Building a System-First Pattern Lab',
  excerpt:
    'Learn how to separate identity from geometry in a modern monorepo...',
  slug: 'building-a-system-first-pattern-lab',
  date: '2026-03-16',
  content: '',
  featuredImage: {
    node: {
      sourceUrl: placeholderSrc(blogFeaturedPlaceholder),
      altText: 'Abstract editorial graphic for a blog post preview',
    },
  },
};

export const PostPreview: StoryObj<typeof BlogCard> = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
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
    <div style={{ maxWidth: '400px' }}>
      <BlogCard post={mockPostNoImage} />
    </div>
  ),
};
