import type { Meta, StoryObj } from '@storybook/react';
import { SplitHomeHero } from './SplitHomeHero';
import { DEFAULT_PORTRAIT_PLACEHOLDER, defaultHomeHero } from './homePageDefaults';

const meta: Meta<typeof SplitHomeHero> = {
  component: SplitHomeHero,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Split hero: portrait (`next/image`) and copy with primary/secondary CTAs. Uses bundled placeholder art from `placeholders.ts` when no CMS portrait is available.',
      },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof SplitHomeHero> = {
  name: 'Default (homePageDefaults)',
  render: () => (
    <SplitHomeHero
      portraitSrc={DEFAULT_PORTRAIT_PLACEHOLDER}
      portraitAlt="Portrait placeholder"
      eyebrow={defaultHomeHero.eyebrow}
      headline={defaultHomeHero.headline}
      subheadline={defaultHomeHero.subheadline}
      intro={defaultHomeHero.intro}
      primaryCta={defaultHomeHero.primaryCta}
      secondaryCta={defaultHomeHero.secondaryCta}
    />
  ),
};
