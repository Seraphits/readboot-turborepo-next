import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from './ThemeToggle';

const meta: Meta<typeof ThemeToggle> = {
  component: ThemeToggle,
  parameters: {
    docs: {
      description: {
        component: [
          'Toggles between light and dark theme by setting `data-theme` on `document.documentElement` (`<html>`).',
          'Persistence uses `localStorage` key **`theme`** (`"light"` | `"dark"`).',
          '**Debug in Storybook:** after clicking, inspect `<html data-theme="…">` in DevTools; Storybook preview may also mirror app `globals` if configured.',
        ].join(' '),
      },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof ThemeToggle> = {
  render: () => <ThemeToggle />,
};
