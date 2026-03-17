import type { Meta, StoryObj } from '@storybook/react';
import { BlogCard } from './BlogCard';
import type { Post } from '@repo/wp-utils';

const meta: Meta<typeof BlogCard> = {
  title: 'Molecules/BlogCard',
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
      sourceUrl:
        'https://placeholder.co/600x400/faf9f6/36454f?text=Featured+Image',
      altText: 'Technical diagram',
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
