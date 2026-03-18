import type { Meta, StoryObj } from '@storybook/react';
import pairingKeys from './_colors-pairings.module.scss';
// We use the mixin's generated classes or inline styles
import styles from './_colors-pairings.module.scss';

const meta: Meta = {
  title: 'Style Guide/2. Color Pairings',
};
export default meta;

export const PairingRules: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {Object.keys(pairingKeys).map((key) => (
        <div
          key={key}
          className={styles[`pairing--${key}`]} // Assumes you have a helper class in SCSS
          style={{ padding: '2rem', border: '1px solid', borderRadius: '8px' }}
        >
          <h4>{key.replace(/-/g, ' ').toUpperCase()}</h4>
          <p>This box shows how the background, text, and border colors go together for this rule.</p>
        </div>
      ))}
    </div>
  ),
};
