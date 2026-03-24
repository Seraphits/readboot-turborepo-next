import type { Meta, StoryObj } from '@storybook/react';
import { BRAND_COLORS } from './colors-data';
import { ColorSwatch } from './ColorSwatch';

const meta: Meta<typeof ColorSwatch> = {
  component: ColorSwatch,
  parameters: {
    docs: {
      description: {
        component:
          'Swatch card using `Geometric` swatch layout — same primitive used in **Primitives** stories. Tier 1 reference colors only here; see **System tokens** for `$sys-*`.',
      },
    },
  },
};
export default meta;

export const BrandReferenceSwatches: StoryObj<typeof ColorSwatch> = {
  name: 'Brand reference (Tier 1)',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1.5rem',
      }}
    >
      {BRAND_COLORS.map((color) => (
        <ColorSwatch key={color.variable} name={color.name} variable={color.variable} hex={color.hex} />
      ))}
    </div>
  ),
};
