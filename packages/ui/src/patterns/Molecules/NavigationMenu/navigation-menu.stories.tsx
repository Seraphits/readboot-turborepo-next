
import type { Meta, StoryObj } from '@storybook/react';
import NavigationMenu from './navigation-menu';

const meta = {
  title: 'Patterns/Molecules/NavigationMenu',
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
      { label: 'Page 1', href: '/?path=/story/patterns-molecules-NavigationMenu--default' },
    ],
  },
};
