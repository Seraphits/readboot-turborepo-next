import type { Meta, StoryObj } from '@storybook/react';
// Import the raw hex data from your variables file
import { BRAND_COLORS } from './colors-data';

const meta: Meta = {};
export default meta;

export const AllColors: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '2rem' }}>
      {BRAND_COLORS.map((color) => (
        <div key={color.variable}>
          {/* Square with the color */}
          <div style={{ width: '100px', height: '100px', backgroundColor: color.hex, border: '1px solid #ccc', borderRadius: '4px' }} />
          {/* Text under it with Name and Usage */}
          <div style={{ marginTop: '0.5rem' }}>
            <strong>{color.name}</strong>
            <p style={{ fontSize: '0.8rem', color: '#666' }}>Usage: {color.variable}</p>
          </div>
        </div>
      ))}
    </div>
  ),
};
