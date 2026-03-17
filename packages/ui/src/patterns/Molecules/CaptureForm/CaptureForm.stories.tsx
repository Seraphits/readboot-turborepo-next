import type { Meta, StoryObj } from '@storybook/react';
import { CaptureForm } from './CaptureForm';

const meta: Meta<typeof CaptureForm> = {
  title: 'Molecules/CaptureForm',
  component: CaptureForm,
};
export default meta;

export const Newsletter: StoryObj<typeof CaptureForm> = {
  args: {
    ctaText: 'Join the Lab',
  },
};
