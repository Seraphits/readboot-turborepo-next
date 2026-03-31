import type { Meta, StoryObj } from "@storybook/react";
import { MissionProvocation } from "./MissionProvocation";

const meta: Meta<typeof MissionProvocation> = {
  component: MissionProvocation,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Mission block: headline with optional `accentWord` span (brand accent). When `title` does not contain `accentWord`, the title renders without accent styling.",
      },
    },
  },
};
export default meta;

export const AccentInTitle: StoryObj<typeof MissionProvocation> = {
  name: "Accent word in title",
  render: () => (
    <MissionProvocation
      title="Example mission with highlighted emphasis in the headline"
      accentWord="highlighted"
      paragraphs={[
        "First column: neutral Storybook copy for layout and typography.",
        "Second column: multi-column body with an optional brand accent on one phrase.",
      ]}
    />
  ),
};

export const NoAccentMatch: StoryObj<typeof MissionProvocation> = {
  name: "Title without accent match",
  render: () => (
    <MissionProvocation
      title="Plain headline when accentWord is absent from title"
      accentWord="Alignment"
      paragraphs={["First column copy.", "Second column copy."]}
    />
  ),
};
