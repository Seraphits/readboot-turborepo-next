import type { Meta, StoryObj } from '@storybook/react';
import { MissionProvocation } from './MissionProvocation';
import { defaultMission } from './homePageDefaults';

const meta: Meta<typeof MissionProvocation> = {
  component: MissionProvocation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Mission block: headline with optional `accentWord` span (brand accent). When `title` does not contain `accentWord`, the title renders without accent styling.',
      },
    },
  },
};
export default meta;

export const WithAccentWord: StoryObj<typeof MissionProvocation> = {
  name: 'Default (accent in title)',
  render: () => (
    <MissionProvocation
      title={defaultMission.title}
      accentWord={defaultMission.accentWord}
      paragraphs={defaultMission.paragraphs}
    />
  ),
};

export const NoAccentMatch: StoryObj<typeof MissionProvocation> = {
  name: 'Title without accent match',
  render: () => (
    <MissionProvocation
      title="Plain headline when accentWord is absent from title"
      accentWord="Alignment"
      paragraphs={['First column copy.', 'Second column copy.']}
    />
  ),
};
