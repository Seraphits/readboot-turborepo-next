import type { Meta, StoryObj } from '@storybook/react';
import { HomePage } from './HomePage';

const meta: Meta<typeof HomePage> = {
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

/** Uses bundled `/assets/storybook/*.svg` placeholders (portrait + pillar cards) via defaults. */
export const PortfolioPreview: StoryObj<typeof HomePage> = {
  render: () => <HomePage />,
};
