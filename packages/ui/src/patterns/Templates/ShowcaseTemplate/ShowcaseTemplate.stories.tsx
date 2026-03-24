import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../../Atoms/Branding/Typography/Typography';
import { ShowcaseTemplate } from './ShowcaseTemplate';

const meta: Meta<typeof ShowcaseTemplate> = {
  component: ShowcaseTemplate,
  parameters: {
    docs: {
      description: {
        component:
          'Two-slot shell: **header** + **main**. Use for portfolio/docs shells; compose organisms (e.g. `Showcase`) in `mainSlot`.',
      },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof ShowcaseTemplate> = {
  render: () => (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
      <ShowcaseTemplate
        headerSlot={
          <Typography as="h1" variant="h2">
            Showcase template
          </Typography>
        }
        mainSlot={
          <Typography as="p" variant="body">
            Main region — replace with grids, WP-driven lists, or other templates.
          </Typography>
        }
      />
    </div>
  ),
};
