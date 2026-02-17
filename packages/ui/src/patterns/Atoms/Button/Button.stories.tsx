import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button'; // Co-located import

const meta = {
  title: 'Patterns/Atoms/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: 'Click Me' },
};
