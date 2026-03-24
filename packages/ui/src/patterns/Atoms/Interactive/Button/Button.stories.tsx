import type { Meta, StoryObj } from '@storybook/react';
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
  render: () => <Button variant="ink-dark-on-paper-light">Primary</Button>,
};

export const AllButtonVariants: StoryObj = {
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
