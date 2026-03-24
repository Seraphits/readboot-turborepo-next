import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../../Branding/Typography/Typography';
import { SectionLayout, type SectionLayoutVariant } from './SectionLayout';

const meta: Meta<typeof SectionLayout> = {
  component: SectionLayout,
  parameters: {
    docs: {
      description: {
        component:
          'Grid-based section presets (`centered`, `grid`, `split`, `newspaper`, …) with optional `bordered` (Futurist Carton frame). Variants without dedicated rules still get the base `.section-layout` grid.',
      },
    },
  },
};
export default meta;

const filler = (label: string) => (
  <Typography as="p" variant="body">
    {label}
  </Typography>
);

const VARIANTS: SectionLayoutVariant[] = [
  'centered',
  'split',
  'grid',
  'newspaper',
  'stack',
  'preview',
  'asymmetrical',
];

export const VariantShowcase: StoryObj<typeof SectionLayout> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {VARIANTS.map((variant) => (
        <SectionLayout key={variant} variant={variant} bordered>
          {filler(`variant="${variant}"`)}
          {variant === 'split' && filler('Second column placeholder')}
          {variant === 'grid' && (
            <>
              {filler('Grid cell A')}
              {filler('Grid cell B')}
            </>
          )}
        </SectionLayout>
      ))}
    </div>
  ),
};

export const CenteredBordered: StoryObj<typeof SectionLayout> = {
  render: () => (
    <SectionLayout variant="centered" bordered>
      <Typography as="h2" variant="h2">
        Centered + bordered
      </Typography>
      {filler('Typical hero or intro block.')}
    </SectionLayout>
  ),
};
