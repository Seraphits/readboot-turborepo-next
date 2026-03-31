import type { Meta, StoryObj } from "@storybook/react";
import { defaultVision } from "../../Templates/HomePage/homePageDefaults";
import { VisionRoadmapSection } from "./VisionRoadmapSection";

const meta: Meta<typeof VisionRoadmapSection> = {
  component: VisionRoadmapSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Vision + generational roadmap: title, body, and a horizontal timeline of labels (Strauss–Howe–style framing in copy).",
      },
    },
  },
};
export default meta;

export const SampleTimeline: StoryObj<typeof VisionRoadmapSection> = {
  name: "Sample timeline (home defaults)",
  render: () => (
    <VisionRoadmapSection
      title={defaultVision.title}
      body={defaultVision.body}
      generations={[...defaultVision.generations]}
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
        "Artist",
        "Philosopher",
        "Nomad",
        "Hero",
        "Artist",
        "Philosopher",
      ]}
    />
  ),
};
