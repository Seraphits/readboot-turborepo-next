import type { Meta, StoryObj } from '@storybook/react';
import {
  defaultDocsHomeHero,
  defaultDocsMission,
  defaultDocsPillars,
  defaultDocsVision,
  DOCS_PORTRAIT_PLACEHOLDER,
} from './docsHomeDefaults';
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

/** Docs app defaults — same `HomePage` template, docs copy bundle. */
// export const DocsLandingPreview: StoryObj<typeof HomePage> = {
//   render: () => (
//     <HomePage
//       portraitSrc={DOCS_PORTRAIT_PLACEHOLDER}
//       portraitAlt="Documentation portal placeholder"
//       hero={defaultDocsHomeHero}
//       mission={defaultDocsMission}
//       pillars={[...defaultDocsPillars]}
//       vision={defaultDocsVision}
//     />
//   ),
// };
