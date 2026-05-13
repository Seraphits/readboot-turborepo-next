import type { Meta, StoryObj } from "@storybook/react";
import { ThemeToggle } from "./ThemeToggle";

const meta: Meta<typeof ThemeToggle> = {
  component: ThemeToggle,
  parameters: {
    docs: {
      description: {
        component:
          "Framework copy of the theme control: sets `data-theme` on `<html>` and persists with `localStorage` key `theme`. Inspect the document root after toggling.",
      },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof ThemeToggle> = {
  render: () => <ThemeToggle />,
};
