import type { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../../Atoms/Branding/Typography/Typography';
import {
  BoxedFeatureHero,
  type BoxedFeatureHeroLayoutVariant,
} from './BoxedFeatureHero';

const meta: Meta<typeof BoxedFeatureHero> = {
  component: BoxedFeatureHero,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '**Boxed feature** hero: a rule wraps the whole module (newspaper inset). Uses `SectionLayout` + headline + deck + CTA. Non-`centered` layouts render a **media** slot (`grid-area: media`) — pass `imageNode` (e.g. `next/image` or a placeholder).',
      },
    },
  },
};
export default meta;

const shell = (node: ReactNode) => (
  <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '1rem' }}>{node}</div>
);

const mediaPlaceholder = (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      minHeight: '200px',
    }}
  >
    <Typography as="span" variant="caption">
      imageNode placeholder
    </Typography>
  </div>
);

export const Centered: StoryObj<typeof BoxedFeatureHero> = {
  render: () =>
    shell(
      <BoxedFeatureHero
        title="Engineering the Operating Systems of Human Growth"
        subhead="Centered layout: no media column."
        ctaText="View portfolio"
        layout="centered"
      />
    ),
};

const withMedia = (layout: BoxedFeatureHeroLayoutVariant) =>
  shell(
    <BoxedFeatureHero
      title="Split headline for layout preview"
      subhead="Media slot uses the Futurist Carton frame from `BoxedFeatureHero.module.scss`."
      ctaText="Get started"
      layout={layout}
      imageNode={mediaPlaceholder}
    />
  );

export const Split: StoryObj<typeof BoxedFeatureHero> = {
  render: () => withMedia('split'),
};

export const Asymmetrical: StoryObj<typeof BoxedFeatureHero> = {
  render: () => withMedia('asymmetrical'),
};

export const Preview: StoryObj<typeof BoxedFeatureHero> = {
  render: () => withMedia('preview'),
};
