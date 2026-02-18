
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
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'Page 1', href: '/?path=/story/patterns-molecules-navmenu--default' },
    ],
  },
};
