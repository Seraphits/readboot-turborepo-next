import type { Meta, StoryObj } from '@storybook/react';
import { MOCK_POSTS } from '../../../assets/storybook/wpShowcaseMocks';
import { Showcase } from '../Showcase/Showcase';

const meta: Meta<typeof Showcase> = {
  component: Showcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '`BlogShowcase` is an **async** server component: it calls `getPosts` from `@repo/wp-utils` and renders `Showcase` with `type="blog"`. Storybook does not execute the server entry; this story shows the resulting UI with WP-shaped mock posts.',
      },
    },
  },
};
export default meta;

export const BlogGridFromFetchedPosts: StoryObj<typeof Showcase> = {
  name: 'Blog grid (output of BlogShowcase)',
  render: () => (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
      <Showcase type="blog" title="From the blog" items={MOCK_POSTS} />
    </div>
  ),
};
