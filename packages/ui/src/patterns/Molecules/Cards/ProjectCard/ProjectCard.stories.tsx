import type { Meta, StoryObj } from '@storybook/react';
import type { Project } from '@repo/wp-utils';
import { ProjectCard } from './ProjectCard';

const mockProject: Project = {
  id: '1',
  title: 'Embedded Debug Platform',
  slug: 'embedded-debug-platform',
  date: '2026-03-01',
  content: '',
  excerpt: '<p>System-first tooling for firmware and documentation.</p>',
  projectIntelligence: {
    lifecycleStatus: 'Active',
    impactMetric: '3 teams',
    liveProjectLink: 'https://example.com',
    linkedBlogCategory: { slug: 'engineering', name: 'Engineering' },
  },
  tags: {
    nodes: [{ name: 'Firmware' }, { name: 'Docs' }],
  },
};

const meta: Meta<typeof ProjectCard> = {
  component: ProjectCard,
};
export default meta;

export const Default: StoryObj<typeof ProjectCard> = {
  render: () => (
    <div style={{ maxWidth: '420px' }}>
      <ProjectCard project={mockProject} />
    </div>
  ),
};
