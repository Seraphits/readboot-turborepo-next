import type { Meta, StoryObj } from "@storybook/react";
import type { Project } from "@repo/wp-utils";
import { ProjectCard } from "./ProjectCard";

const mockProject: Project = {
  id: "1",
  title: "Sample project card title",
  slug: "sample-project-card",
  date: "2026-03-01",
  content: "",
  excerpt: "<p>Neutral excerpt for layout preview in Storybook.</p>",
  projectIntelligence: {
    lifecycleStatus: "Active",
    impactMetric: "3 teams",
    liveProjectLink: "https://example.com",
    linkedBlogCategory: { slug: "engineering", name: "Engineering" },
  },
  tags: {
    nodes: [{ name: "Firmware" }, { name: "Docs" }],
  },
};

const meta: Meta<typeof ProjectCard> = {
  component: ProjectCard,
};
export default meta;

export const Default: StoryObj<typeof ProjectCard> = {
  render: () => (
    <div style={{ maxWidth: "420px" }}>
      <ProjectCard project={mockProject} />
    </div>
  ),
};

const mockProjectStress: Project = {
  ...mockProject,
  title:
    "Very long sample project title used only to stress line wrapping and card layout stability across viewports",
  tags: {
    nodes: [
      { name: "Firmware" },
      { name: "Docs" },
      { name: "Monorepo" },
      { name: "TypeScript" },
      { name: "CI" },
      { name: "Design system" },
      { name: "Accessibility" },
    ],
  },
};

export const LongTitleManyTags: StoryObj<typeof ProjectCard> = {
  render: () => (
    <div style={{ maxWidth: "420px" }}>
      <ProjectCard project={mockProjectStress} />
    </div>
  ),
};
