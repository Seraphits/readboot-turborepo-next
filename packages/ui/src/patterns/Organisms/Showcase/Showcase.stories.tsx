import type { Meta, StoryObj } from '@storybook/react';
import type { Post, Project } from '@repo/wp-utils';
import {
  blogFeaturedPlaceholder,
  placeholderSrc,
} from '../../../assets/storybook/placeholders';
import { Showcase } from './Showcase';

const mockProject = (id: string, title: string, slug: string): Project => ({
  id,
  title,
  slug,
  date: '2026-03-01',
  content: '',
  excerpt: '<p>Excerpt for Storybook grid.</p>',
  projectIntelligence: {
    lifecycleStatus: 'Active',
    impactMetric: '3 teams',
    liveProjectLink: 'https://example.com',
    linkedBlogCategory: { slug: 'engineering', name: 'Engineering' },
  },
  tags: { nodes: [{ name: 'Design' }] },
});

const mockPost = (id: string, title: string, slug: string): Post => ({
  id,
  title,
  slug,
  date: '2026-03-16',
  content: '',
  excerpt: 'Short excerpt for the showcase grid.',
  featuredImage: {
    node: {
      sourceUrl: placeholderSrc(blogFeaturedPlaceholder),
      altText: 'Featured image',
    },
  },
});

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

const MOCK_PROJECTS: Project[] = [
  mockProject('p1', 'Embedded Debug Platform', 'embedded-debug-platform'),
  mockProject('p2', 'Design Engineering Lab', 'design-engineering-lab'),
];

const MOCK_POSTS: Post[] = [
  mockPost('b1', 'Building a System-First Pattern Lab', 'system-first-pattern-lab'),
  mockPost('b2', 'Monorepo Governance Notes', 'monorepo-governance'),
];

export const ProjectGrid: StoryObj<typeof Showcase> = {
  render: () => (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
      <Showcase type="project" title="Featured work" items={MOCK_PROJECTS} />
    </div>
  ),
};

export const BlogGrid: StoryObj<typeof Showcase> = {
  render: () => (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
      <Showcase type="blog" title="From the blog" items={MOCK_POSTS} />
    </div>
  ),
};

export const WithoutTitle: StoryObj<typeof Showcase> = {
  render: () => (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
      <Showcase type="project" items={MOCK_PROJECTS} />
    </div>
  ),
};
