import type { Meta, StoryObj } from '@storybook/react';
import { GlitchHeader } from './GlitchHeader';

const meta: Meta<typeof GlitchHeader> = {
  title: 'Molecules/GlitchHeader',
  component: GlitchHeader,
};
export default meta;

export const BrandDisplay: StoryObj<typeof GlitchHeader> = {
  args: {
    title: 'READBOOT',
    subhead: 'System-First Instructional Manual',
  },
};

export const ErrorState: StoryObj<typeof GlitchHeader> = {
  args: {
    title: 'CRITICAL_FAIL',
    subhead: 'System fracture detected in Pattern Lab.',
  },
};
