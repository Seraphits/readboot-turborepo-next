import type { Meta, StoryObj } from '@storybook/react';
import Link from 'next/link';
import { Button, type ButtonVariant } from './Button';

/** Variants implemented on `Button` (color pairings are a superset in `pairingKeys.ts`). */
const BUTTON_VARIANTS = [
  'ink-dark-on-paper-light',
  'action-on-light',
  'outline-on-light',
  'alert',
] as const satisfies readonly ButtonVariant[];

const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    variant: 'ink-dark-on-paper-light',
    children: 'Primary',
  },
};

export const AsChildWithLink: StoryObj<typeof Button> = {
  render: () => (
    <Button asChild variant="action-on-light">
      <Link href="/portfolio">View portfolio</Link>
    </Button>
  ),
};

export const Disabled: StoryObj<typeof Button> = {
  args: {
    variant: 'action-on-light',
    disabled: true,
    children: 'Unavailable',
  },
};

/** Icon-only or minimal label: pair visible text with `aria-label` for screen readers. */
export const WithAriaLabel: StoryObj<typeof Button> = {
  args: {
    variant: 'outline-on-light',
    'aria-label': 'Close dialog',
    children: '×',
  },
};

export const AllButtonVariants: StoryObj<typeof Button> = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
      {BUTTON_VARIANTS.map((variant) => (
        <div key={variant} style={{ textAlign: 'center' }}>
          <Button variant={variant}>
            {variant.split('-')}
          </Button>
          <p style={{ fontSize: '0.7rem', marginTop: '0.5rem' }}>{variant}</p>
        </div>
      ))}
    </div>
  ),
};
