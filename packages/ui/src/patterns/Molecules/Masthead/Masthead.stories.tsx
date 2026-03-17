import type { Meta, StoryObj } from '@storybook/react';
import { Masthead } from './Masthead';

const meta: Meta<typeof Masthead> = {
  title: 'Molecules/Masthead',
  component: Masthead,
};
export default meta;

export const BrandDisplay: StoryObj<typeof Masthead> = {
  args: {
    title: 'READBOOT',
    subhead: 'System-First Instructional Manual',
  },
};

export const ErrorState: StoryObj<typeof Masthead> = {
  args: {
    title: 'CRITICAL_FAIL',
    subhead: 'System fracture detected in Pattern Lab.',
  },
};
