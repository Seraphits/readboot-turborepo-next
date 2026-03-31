import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "../../Branding/Typography/Typography";
import { Container } from "./Container";

const meta: Meta<typeof Container> = {
  component: Container,
  parameters: {
    docs: {
      description: {
        component:
          "Viewport-width shell with paper/dark background. Use `as` for semantic landmarks (`main`, `section`, `article`, …).",
      },
    },
  },
};
export default meta;

const demo = (
  <Typography as="p" variant="body">
    Container content — full width, themed background from
    `Container.module.scss`.
  </Typography>
);

export const AsSection: StoryObj<typeof Container> = {
  name: "As section (default)",
  render: () => (
    <div style={{ minHeight: "12rem", padding: "1rem" }}>
      <Container>{demo}</Container>
    </div>
  ),
};

export const AsMain: StoryObj<typeof Container> = {
  render: () => (
    <div style={{ minHeight: "12rem", padding: "1rem" }}>
      <Container as="main">{demo}</Container>
    </div>
  ),
};

export const AsArticle: StoryObj<typeof Container> = {
  render: () => (
    <div style={{ minHeight: "12rem", padding: "1rem" }}>
      <Container as="article">{demo}</Container>
    </div>
  ),
};
