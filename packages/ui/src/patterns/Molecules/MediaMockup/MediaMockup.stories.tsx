import type { Meta, StoryObj } from '@storybook/react';
import { MediaMockup } from './MediaMockup';
import { Typography } from '../../Atoms/BrandingAtoms/Typography/Typography';

const meta: Meta<typeof MediaMockup> = {
  title: 'Molecules/MediaMockup',
  component: MediaMockup,
};
export default meta;

export const BrowserPreview: StoryObj<typeof MediaMockup> = {
  render: () => (
    <MediaMockup>
      <div style={{ padding: '2rem' }}>
        <Typography as="h2" variant="h2">
          Internal Page Preview
        </Typography>
        <Typography as="p" variant="body">
          This content is wrapped in the MediaMockup browser frame.
        </Typography>
      </div>
    </MediaMockup>
  ),
};
