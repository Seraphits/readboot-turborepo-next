import type { Meta, StoryObj } from "@storybook/react";
import { VisionRoadmapSection } from "./VisionRoadmapSection";

const meta: Meta<typeof VisionRoadmapSection> = {
  component: VisionRoadmapSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Roadmap strip: title, body, and a horizontal row of phase labels for timeline layout.",
      },
    },
  },
};
export default meta;

export const SampleTimeline: StoryObj<typeof VisionRoadmapSection> = {
  name: "Sample timeline (neutral)",
  render: () => (
    <VisionRoadmapSection
      title="Roadmap title for layout"
      body="Neutral body copy for Storybook. Production vision copy is supplied from apps or `homePageDefaults.ts`."
      generations={["Phase one", "Phase two", "Phase three", "Phase four"]}
    />
  ),
};

export const LongerTimeline: StoryObj<typeof VisionRoadmapSection> = {
  name: "More timeline nodes",
  render: () => (
    <VisionRoadmapSection
      title="Roadmap with more nodes"
      body="Extra labels stress line wrapping and spacing on the timeline track."
      generations={[
        "Node A",
        "Node B",
        "Node C",
        "Node D",
        "Node E",
        "Node F",
      ]}
    />
  ),
};
