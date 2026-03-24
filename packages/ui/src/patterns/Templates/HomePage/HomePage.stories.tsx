import type { Meta, StoryObj } from '@storybook/react';
import { HomePage } from './HomePage';

const meta: Meta<typeof HomePage> = {
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

/** Placeholder art from `packages/ui/src/assets/storybook/placeholders.ts` (bundled imports; Storybook + Next resolve URLs). */
export const PortfolioPreview: StoryObj<typeof HomePage> = {
  render: () => <HomePage />,
};
