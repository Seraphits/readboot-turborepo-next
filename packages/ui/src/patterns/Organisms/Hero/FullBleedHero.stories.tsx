import type { Meta, StoryObj } from '@storybook/react';
import { FullBleedHero } from './FullBleedHero';
import {
  DEFAULT_PORTRAIT_PLACEHOLDER,
  defaultHomeHero,
} from '../../Templates/HomePage/homePageDefaults';

const meta: Meta<typeof FullBleedHero> = {
  component: FullBleedHero,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '**Full-bleed** hero: portrait + kicker, headline, deck, lead, and dual CTAs on newsprint — no outer rule around the whole band (newspaper open layout). Distinct from **Boxed feature** (`BoxedFeatureHero`).',
      },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof FullBleedHero> = {
  name: 'Default (home defaults)',
  render: () => (
    <FullBleedHero
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
