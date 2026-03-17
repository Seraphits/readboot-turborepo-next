import type { Meta, StoryObj } from '@storybook/react';
import { SpacingScale } from './SpacingScale';

const meta: Meta = {
  title: 'Patterns/Atoms/Spacing',
  component: SpacingScale,
};
export default meta;

export const ScaleReference: StoryObj = {
  render: () => <SpacingScale />,
};
