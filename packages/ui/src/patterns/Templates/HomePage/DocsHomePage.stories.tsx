import type { Meta, StoryObj } from '@storybook/react';
import { DocsHomePage } from './DocsHomePage';

const meta: Meta<typeof DocsHomePage> = {
  component: DocsHomePage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Docs app landing (`/docs/`): same band structure as `HomePage` with `docsHomeDefaults` copy (style guide, patterns, engineering pillars). Override props from `apps/docs/app/docs/page.tsx` as needed.',
      },
    },
  },
};
export default meta;

export const DocsLandingPreview: StoryObj<typeof DocsHomePage> = {
  render: () => <DocsHomePage />,
};
