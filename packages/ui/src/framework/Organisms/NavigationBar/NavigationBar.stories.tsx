import type { Meta, StoryObj } from "@storybook/react";
import type { NavigationLinkItem } from "@repo/ui/molecules";
import NavigationBar from "./navigation-bar";

/** Web-style routes (no Storybook canvas URLs). */
const REALISTIC_LINKS: NavigationLinkItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "blog", label: "Blog", href: "/blog/" },
  { id: "projects", label: "Projects", href: "/projects/" },
  { id: "docs", label: "Docs", href: "/docs/" },
];

const meta = {
  component: NavigationBar,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Realistic routes; default logo is **`LogoImageClient`** inside the bar (Storybook-safe; apps omit `logo` the same way). */
export const Default: Story = {
  args: {
    links: REALISTIC_LINKS,
  },
};
