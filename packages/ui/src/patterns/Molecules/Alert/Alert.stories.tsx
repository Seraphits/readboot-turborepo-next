import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  component: Alert,
};
export default meta;

export const Default: StoryObj<typeof Alert> = {
  render: () => (
    <div
      style={{
        width: "100%",
        /** `$sys-color-dark-border` / `$ref-color-charcoal` — visible dashed frame in Storybook */
        border: "1px dashed #36454F",
      }}
    >
      <Alert />
    </div>
  ),
};
