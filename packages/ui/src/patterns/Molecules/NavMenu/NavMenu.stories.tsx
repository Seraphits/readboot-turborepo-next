
import type { Meta, StoryObj } from '@storybook/react';
import NavMenu from './NavMenu';

const meta = {
  title: 'Patterns/Molecules/NavMenu',
  component: NavMenu,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NavMenu>;

export default meta;

type Story = StoryObj<typeof meta>; // Changed from StoryObj<typeof NavMenu> to StoryObj<typeof meta> for standard Storybook typing

export const Default: Story = {
  args: {
    // Corrected the array syntax here:
    links: [
      { label: 'Home', href: '/' },
      { label: 'Page 1', href: '/page1' },
    ],
  },
};
