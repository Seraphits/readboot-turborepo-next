'use client';

import { composeStories } from '@storybook/react';
import * as ButtonStories from '@repo/ui/patterns/Atoms/Button/Button.stories';

const { Primary } = composeStories(ButtonStories);

export function ComponentShowcase() {
  return (
    <div>
      <h2>Button (Portable Story)</h2>
      <p>Rendered natively from Storybook via composeStories — no iframe.</p>
      <div style={{ display: 'flex', gap: '1rem', padding: '1rem 0' }}>
        <Primary />
      </div>
    </div>
  );
}
