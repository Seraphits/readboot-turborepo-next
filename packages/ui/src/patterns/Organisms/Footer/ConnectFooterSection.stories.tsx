import type { Meta, StoryObj } from "@storybook/react";
import { ConnectFooterSection } from "./ConnectFooterSection";

const neutralConnect = {
  title: "Connect strip (sample)",
  links: [
    { label: "Example outbound", href: "https://example.com/" },
    { label: "Documentation", href: "/docs/" },
  ] as const,
  copyright: "© Storybook preview — neutral fixture",
} as const;

const meta: Meta<typeof ConnectFooterSection> = {
  component: ConnectFooterSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Global connect strip: title, outbound links (`next/link`), copyright. Apps pass real links from `homePageDefaults.ts` or route-level props.",
      },
    },
  },
};
export default meta;

export const NeutralFixture: StoryObj<typeof ConnectFooterSection> = {
  name: "Neutral fixture",
  render: () => <ConnectFooterSection {...neutralConnect} />,
};

export const CustomCopy: StoryObj<typeof ConnectFooterSection> = {
  render: () => (
    <ConnectFooterSection
      title="Stay in touch"
      links={[
        { label: "Site", href: "/" },
        { label: "Blog", href: "/blog/" },
      ]}
      copyright="© Storybook preview"
    />
  ),
};
