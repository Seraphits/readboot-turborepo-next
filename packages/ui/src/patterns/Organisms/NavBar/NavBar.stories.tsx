import type { Meta, StoryObj } from '@storybook/react';
import { LogoImageClient } from '../../Atoms/Logo/LogoImageClient';
import NavBar from './NavBar';

const meta = {
  title: 'Patterns/Organisms/NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <NavBar {...args} logo={<LogoImageClient width="100%" height="100%" />} />,
  args: {
    links: [
      { label: 'Home', href: '' },
      { label: 'Page 1', href: '' },
    ],
  },
};
