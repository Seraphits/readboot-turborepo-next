import type { Meta, StoryObj } from '@storybook/react';
import type { NavigationLinkItem } from '../../Molecules/NavigationMenu/navigation-menu';
import { LogoImageClient } from '../../Atoms/Branding/Logo/LogoImageClient';
import NavigationBar from './navigation-bar';

/** Web-style routes (no Storybook canvas URLs). */
const REALISTIC_LINKS: NavigationLinkItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'blog', label: 'Blog', href: '/blog/' },
  { id: 'projects', label: 'Projects', href: '/projects/' },
  { id: 'docs', label: 'Docs', href: '/docs/' },
];

const meta = {
  component: NavigationBar,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Realistic routes + client logo (recommended in Storybook; mirrors apps that inject a client logo slot). */
export const Default: Story = {
  render: (args) => (
    <NavigationBar
      {...args}
      logo={<LogoImageClient width="100%" height="100%" />}
    />
  ),
  args: {
    links: REALISTIC_LINKS,
  },
};

/**
 * `logo` omitted — in **Next.js app routes** the bar uses bundled async `LogoImage`.
 * Prefer **Default** in Storybook for a reliable preview.
 */
export const LinksOnlyAppDefaultLogo: Story = {
  name: 'Links only (app default logo)',
  render: (args) => <NavigationBar {...args} />,
  args: {
    links: REALISTIC_LINKS,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Omits `logo` so the component falls back to `LogoImage` (server). In this Storybook build, prefer **Default** for a reliable preview.',
      },
    },
  },
};
