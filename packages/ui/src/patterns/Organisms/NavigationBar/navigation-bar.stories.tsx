import type { Meta, StoryObj } from '@storybook/react';
import { LogoImageClient } from '../../Atoms/BrandingAtoms/Logo/LogoImageClient';
import NavigationBar from './navigation-bar';

const meta = {
  title: 'Patterns/Organisms/NavigationBar',
  component: NavigationBar,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <NavigationBar
      {...args}
      logo={
        <LogoImageClient
          width="100%"
          height="100%"
          src="https://placehold.co/120x48/faf9f6/36454f?text=ReadBoot"
          alt="ReadBoot logo"
        />
      }
    />
  ),
  args: {
    links: [
      { label: 'Home', href: '' },
      { label: 'Page 1', href: '' },
    ],
  },
};
