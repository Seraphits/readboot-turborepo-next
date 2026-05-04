import type { Meta, StoryObj } from "@storybook/react";
import { setStorybookPathnameOverride } from "../../../../lib/storybookPathnameOverride";
import NavigationLink from "./navigation-link";

const meta: Meta<typeof NavigationLink> = {
  component: NavigationLink,
  parameters: {
    layout: "centered",
  },
  // Use argTypes to create interactive controls in Storybook
  argTypes: {
    href: { control: "text" },
    children: { control: "text" },
  },
  decorators: [
    (Story, context) => {
      const p = context.parameters?.nextNavigation?.pathname;
      setStorybookPathnameOverride(typeof p === "string" ? p : null);
      return <Story />;
    },
  ],
} satisfies Meta<typeof NavigationLink>;

export default meta;
type Story = StoryObj<typeof NavigationLink>;

/** Inactive link: simulated pathname does not match `href`. */
export const Default: Story = {
  args: {
    href: "/docs/",
    children: "Documentation",
  },
  parameters: {
    nextNavigation: { pathname: "/blog/" },
  },
};

/** Active link: pathname matches `href` (via `apps/storybook/.storybook/next-navigation-mock.ts`). */
export const Active: Story = {
  args: {
    href: "/",
    children: "Home",
  },
  parameters: {
    nextNavigation: { pathname: "/" },
  },
};
