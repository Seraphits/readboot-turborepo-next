import type { Meta, StoryObj } from '@storybook/react';
import NavigationLink from './navigation-link';

const meta: Meta<typeof NavigationLink> = {
  title: 'Patterns/Atoms/NavigationLink',
  component: NavigationLink,
  parameters: {
    layout: 'centered',
  },
  // Use argTypes to create interactive controls in Storybook
  argTypes: {
    href: { control: 'text' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof NavigationLink>;

export default meta;
type Story = StoryObj<typeof NavigationLink>;

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
