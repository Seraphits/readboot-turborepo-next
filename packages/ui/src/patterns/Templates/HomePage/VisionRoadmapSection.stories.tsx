import type { Meta, StoryObj } from '@storybook/react';
import { VisionRoadmapSection } from './VisionRoadmapSection';
import { defaultVision } from './homePageDefaults';

const meta: Meta<typeof VisionRoadmapSection> = {
  component: VisionRoadmapSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Vision + generational roadmap: title, body, and a horizontal timeline of labels (Strauss–Howe–style framing in copy).',
      },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof VisionRoadmapSection> = {
  name: 'Default (homePageDefaults)',
  render: () => (
    <VisionRoadmapSection
      title={defaultVision.title}
      body={defaultVision.body}
      generations={[...defaultVision.generations]}
    />
  ),
};

export const LongerTimeline: StoryObj<typeof VisionRoadmapSection> = {
  render: () => (
    <VisionRoadmapSection
      title="Roadmap with more nodes"
      body="Extra labels stress line wrapping and spacing on the timeline track."
      generations={['Artist', 'Philosopher', 'Nomad', 'Hero', 'Artist', 'Philosopher']}
    />
  ),
};
