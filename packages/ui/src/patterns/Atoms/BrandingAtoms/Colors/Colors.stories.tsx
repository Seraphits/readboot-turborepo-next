import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';
import { ALLOWED_COMBINATIONS } from './colors-data';

const meta: Meta = {
  title: 'Atoms/Branding Atoms/Colors',
};
export default meta;

/** Helper component so hooks run in a proper function component. */
function LiveCyclePreview() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ALLOWED_COMBINATIONS.length);
    }, 2500); // 2.5s allows for the bouncy transition
    return () => clearInterval(interval);
  }, []);

  const safeIndex = index % ALLOWED_COMBINATIONS.length;
  const pairing = ALLOWED_COMBINATIONS[safeIndex]!;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      border: '4px solid var(--sys-color-border)',
      borderRadius: '12px',
      backgroundColor: pairing.bgHex,
      color: pairing.textHex,
      transition: 'all 0.5s cubic-bezier(0.8, -0.5, 0.2, 1.8)'
    }}>
      <h2 style={{ fontFamily: 'Baloo 2', marginBottom: '1rem' }}>
        Pairing: {pairing.name}
      </h2>
      <code style={{ fontSize: '1rem' }}>
        BG: {pairing.bgVariable} ({pairing.bgHex})
      </code>
      <code style={{ fontSize: '1rem' }}>
        Text: {pairing.textVariable} ({pairing.textHex})
      </code>
    </div>
  );
}

export const LiveCycle: StoryObj = {
  render: () => <LiveCyclePreview />,
};
