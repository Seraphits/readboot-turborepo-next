import type { Meta, StoryObj } from '@storybook/react';
import NavigationMenu from './navigation-menu';

const meta = {
  component: NavigationMenu,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'Blog', href: '/blog/' },
    ],
  },
};
