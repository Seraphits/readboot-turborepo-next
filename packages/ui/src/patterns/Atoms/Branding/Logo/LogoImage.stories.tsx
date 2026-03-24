import type { Meta, StoryObj } from "@storybook/react";
import { LogoImageClient } from "./LogoImageClient";

const meta = {
  component: LogoImageClient,
  parameters: { layout: "centered" },
  argTypes: {
    width: { control: "text" },
    height: { control: "text" },
  },
} satisfies Meta<typeof LogoImageClient>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Bundled logo from `packages/ui/src/assets/branding` (no WP fetch). */
export const Default: Story = {
  args: {
    width: "120px",
    height: "48px",
  },
};

export const Small: Story = {
  args: { width: "80px", height: "32px" },
};

export const Large: Story = {
  args: { width: "200px", height: "80px" },
};

export const FillContainer: Story = {
  args: { width: "100%", height: "100%" },
  decorators: [
    (Story) => (
      <div
        style={{
          width: 150,
          height: 60,
          border: "1px dashed #36454F",
        }}
      >
        <Story />
      </div>
    ),
  ],
};
