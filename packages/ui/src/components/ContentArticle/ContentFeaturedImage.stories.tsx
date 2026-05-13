import type { Meta, StoryObj } from "@storybook/react";
import { ContentFeaturedImage } from "./ContentFeaturedImage";

const meta: Meta<typeof ContentFeaturedImage> = {
  component: ContentFeaturedImage,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Featured media figure using a plain `img` (suitable for Storybook without Next image).",
      },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof ContentFeaturedImage> = {
  args: {
    image: {
      src: "/assets/storybook/pillar-placeholder.svg",
      alt: "Placeholder artwork",
    },
  },
};

export const WithCaption: StoryObj<typeof ContentFeaturedImage> = {
  args: {
    image: {
      src: "/assets/storybook/pillar-placeholder.svg",
      alt: "Placeholder artwork",
    },
    caption: <span>Caption line for figure layout.</span>,
    priority: true,
  },
};
