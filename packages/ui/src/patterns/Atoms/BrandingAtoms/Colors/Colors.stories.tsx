import type { Meta, StoryObj } from '@storybook/react';
import { ColorSwatch } from './ColorSwatch';
import { BRAND_COLORS, ALLOWED_COMBINATIONS } from './colors-data';

const meta: Meta = {
  title: 'Patterns/Atoms/Colors',
  component: ColorSwatch,
};
export default meta;

// View 1: Raw Brand Tokens (Primitives)
export const Primitives: StoryObj = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
        gap: '1.5rem',
      }}
    >
      {BRAND_COLORS.map((color) => (
        <ColorSwatch key={color.variable} {...color} />
      ))}
    </div>
  ),
};

// View 2: Official Pairing Rules (Semantic Rulebook)
export const PairingRules: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {ALLOWED_COMBINATIONS.map((pairing) => (
        <div
          key={pairing.name}
          style={{
            padding: '1.5rem',
            backgroundColor: pairing.bgHex,
            color: pairing.textHex,
            border: '4px solid var(--sys-color-border)',
            borderRadius: '12px',
          }}
        >
          <h3
            style={{
              fontFamily: 'Baloo 2',
              marginBottom: '0.5rem',
              textTransform: 'capitalize',
            }}
          >
            {pairing.name} Pairing
          </h3>
          <code>
            BG: {pairing.bgVariable} / Text: {pairing.textVariable}
          </code>
        </div>
      ))}
    </div>
  ),
};
