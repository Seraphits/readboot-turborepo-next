import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Patterns/Molecules/Alert',
  component: Alert,
};
export default meta;

export const Default: StoryObj<typeof Alert> = {
  render: () => (
    <div style={{ width: '100%', border: '1px dashed var(--sys-color-border)' }}>
      <Alert />
    </div>
  ),
};
