import type { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../../Atoms/Branding/Typography/Typography';
import { Hero, type HeroLayoutVariant } from './Hero';

const meta: Meta<typeof Hero> = {
  component: Hero,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Hero wraps `SectionLayout` + headline + CTA. Non-`centered` layouts render a **media** slot (`grid-area: media`) — pass `imageNode` (e.g. `next/image` or a placeholder).',
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

export const Centered: StoryObj<typeof Hero> = {
  render: () =>
    shell(
      <Hero
        title="Engineering the Operating Systems of Human Growth"
        subhead="Split hero copy and CTA — centered layout has no media column."
        ctaText="View portfolio"
        layout="centered"
      />
    ),
};

const withMedia = (layout: HeroLayoutVariant) =>
  shell(
    <Hero
      title="Split headline for layout preview"
      subhead="Media slot uses the Futurist Carton frame from `Hero.module.scss`."
      ctaText="Get started"
      layout={layout}
      imageNode={mediaPlaceholder}
    />
  );

export const Split: StoryObj<typeof Hero> = {
  render: () => withMedia('split'),
};

export const Asymmetrical: StoryObj<typeof Hero> = {
  render: () => withMedia('asymmetrical'),
};

export const Preview: StoryObj<typeof Hero> = {
  render: () => withMedia('preview'),
};
