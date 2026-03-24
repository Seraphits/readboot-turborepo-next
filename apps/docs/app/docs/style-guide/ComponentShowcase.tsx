'use client';

import { composeStories } from '@storybook/react';
import * as ButtonStories from '@repo/ui/patterns/Atoms/Interactive/Button/Button.stories';
import styles from './ComponentShowcase.module.scss';

const { Primary } = composeStories(ButtonStories);

export function ComponentShowcase() {
  return (
    <div>
      <h2>Button (Portable Story)</h2>
      <p>Rendered natively from Storybook via composeStories — no iframe.</p>
      <div className={styles.storyWrap}>
        <Primary />
      </div>
    </div>
  );
}
