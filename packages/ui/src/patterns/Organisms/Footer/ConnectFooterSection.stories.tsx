import type { Meta, StoryObj } from '@storybook/react';
import { defaultConnect } from '../../Templates/HomePage/homePageDefaults';
import { ConnectFooterSection } from './ConnectFooterSection';

const meta: Meta<typeof ConnectFooterSection> = {
  component: ConnectFooterSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Global connect strip: title, outbound links (`next/link`), copyright. Apps typically pass `defaultConnect` from `homePageDefaults.ts` or override props per layout.',
      },
    },
  },
};
export default meta;

export const DefaultConnect: StoryObj<typeof ConnectFooterSection> = {
  name: 'Default connect (homePageDefaults)',
  render: () => <ConnectFooterSection {...defaultConnect} />,
};

export const CustomCopy: StoryObj<typeof ConnectFooterSection> = {
  render: () => (
    <ConnectFooterSection
      title="Stay in touch"
      links={[
        { label: 'Site', href: '/' },
        { label: 'Blog', href: '/blog/' },
      ]}
      copyright="© Storybook preview"
    />
  ),
};
