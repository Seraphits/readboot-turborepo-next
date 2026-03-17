'use client';

import { useCallback } from 'react';
import styles from './ThemeToggle.module.scss';

type Theme = 'light' | 'dark';

export const ThemeToggle = () => {
  const toggle = useCallback(() => {
    const root = document.documentElement;
    const next: Theme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
  }, []);

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label="Toggle light/dark theme"
    >
      ☀️ / 🌙
    </button>
  );
};
