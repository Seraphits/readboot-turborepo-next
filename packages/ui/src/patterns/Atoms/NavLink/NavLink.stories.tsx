import type { Meta, StoryObj } from '@storybook/react';
import NavLink from './NavLink';

const meta: Meta<typeof NavLink> = {
  title: 'Patterns/Atoms/NavLink',
  component: NavLink,
  parameters: {
    layout: 'centered',
  },
  // Use argTypes to create interactive controls in Storybook
  argTypes: {
    href: { control: 'text' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof NavLink>;

// Default State (using your $sys-color-ink-text)
export const Default: Story = {
  args: {
    href: '/docs',
    children: 'Documentation',
  },
};

// Active State (using your $sys-color-action-primary)
export const Active: Story = {
  args: {
    href: '/',
    children: 'Home',
  },
  parameters: {
    // Mocking the router path to match the href
    nextjs: {
      router: {
        asPath: '/',
      },
    },
  },
};
