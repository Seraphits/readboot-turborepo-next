import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Patterns/Atoms/Button',
  component: Button,
};
export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: { children: 'Primary Button' },
};

export const ComponentSet: StoryObj = {
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
