import type { Meta, StoryObj } from '@storybook/react';
import { FeaturedPillarsSection } from './FeaturedPillarsSection';
import { defaultPillars, type PillarItem } from './homePageDefaults';

const meta: Meta<typeof FeaturedPillarsSection> = {
  component: FeaturedPillarsSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Three-up featured cards: shared pillar placeholder art (`placeholders.ts`), titles, and `next/link` actions.',
      },
    },
  },
};
export default meta;

export const ThreePillars: StoryObj<typeof FeaturedPillarsSection> = {
  name: 'Default (three pillars)',
  render: () => <FeaturedPillarsSection pillars={defaultPillars} />,
};

const singlePillar: PillarItem[] = [
  {
    title: 'Single project spotlight',
    tagline: 'Short tagline for narrow layouts.',
    summary: 'One card to stress the grid when the list has a single item.',
    actionLabel: 'Read more',
    href: '/projects/',
  },
];

export const SinglePillar: StoryObj<typeof FeaturedPillarsSection> = {
  render: () => <FeaturedPillarsSection pillars={singlePillar} />,
};
