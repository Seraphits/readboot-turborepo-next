import type { Meta, StoryObj } from '@storybook/react';
import { MediaMockup } from './MediaMockup';

const meta: Meta<typeof MediaMockup> = {
  title: 'Molecules/MediaMockup',
  component: MediaMockup,
};
export default meta;

export const BrowserPreview: StoryObj<typeof MediaMockup> = {
  render: () => (
    <MediaMockup>
      <div style={{ padding: '2rem' }}>
        <h2 style={{ margin: 0, fontFamily: 'var(--sys-font-headline)' }}>
          Internal Page Preview
        </h2>
        <p style={{ margin: '0.5rem 0 0' }}>
          This content is wrapped in the MediaMockup browser frame.
        </p>
      </div>
    </MediaMockup>
  ),
};
