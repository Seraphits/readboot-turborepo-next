import type { Meta, StoryObj } from "@storybook/react";
import { ContentSidebarNav } from "./ContentSidebarNav";

const meta: Meta<typeof ContentSidebarNav> = {
  component: ContentSidebarNav,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Sidebar list of links with optional current-page marker. Returns `null` when `items` is empty.",
      },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof ContentSidebarNav> = {
  args: {
    heading: "In this library",
    ariaLabel: "Other library entries",
    items: [
      { id: "1", title: "Alpha entry", href: "/library/alpha/" },
      {
        id: "2",
        title: "Current entry (marked)",
        href: "/library/beta/",
        isCurrent: true,
      },
      { id: "3", title: "Gamma entry", href: "/library/gamma/" },
    ],
  },
};
