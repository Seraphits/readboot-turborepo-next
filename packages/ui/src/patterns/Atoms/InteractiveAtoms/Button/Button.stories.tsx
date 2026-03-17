import type { Meta, StoryObj } from '@storybook/react';
import { Button, type ButtonVariant } from './button';
import { ALLOWED_COMBINATIONS } from '../../BrandingAtoms/Colors/colors-data';

const meta: Meta<typeof Button> = {
  title: 'Patterns/Atoms/Interactive Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ALLOWED_COMBINATIONS.map((c) => c.name),
      control: { type: 'select' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button Text',
    variant: 'default',
  },
};

export const ComponentSet: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <small>Default (Base)</small>
        <Button>Base Button</Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <small>Action Variant</small>
        <Button variant="action">Action Button</Button>
      </div>
    </div>
  ),
};

export const AllPairings: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
      }}
    >
      {ALLOWED_COMBINATIONS.map((pairing) => (
        <div
          key={pairing.name}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          <small style={{ color: 'var(--sys-color-ink-text)', opacity: 0.8 }}>
            {pairing.name.toUpperCase()}
          </small>
          <Button variant={pairing.name as ButtonVariant}>
            {pairing.name} Button
          </Button>
        </div>
      ))}
    </div>
  ),
};
