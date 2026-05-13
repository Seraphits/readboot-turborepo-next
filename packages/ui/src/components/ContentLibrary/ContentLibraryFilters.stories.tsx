import type { Meta, StoryObj } from "@storybook/react";
import { ContentLibraryFilters } from "./ContentLibraryFilters";

const meta: Meta<typeof ContentLibraryFilters> = {
  component: ContentLibraryFilters,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "GET filter form for article types and theories. Checkbox `name` values align with the library route handler.",
      },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof ContentLibraryFilters> = {
  args: {
    action: "/library/",
    activeFilters: { types: ["essay"], theories: ["rbeos"] },
    articleTypes: [
      { value: "essay", label: "Essay", count: 4 },
      { value: "brief", label: "Brief", count: 2 },
    ],
    theories: [
      { value: "rbeos", label: "RBEOS", count: 3 },
      { value: "lab", label: "Lab", count: 1 },
    ],
    submitLabel: "Apply filters",
    resetHref: "/library/",
  },
};

export const WithoutResetLink: StoryObj<typeof ContentLibraryFilters> = {
  args: {
    action: "/library/",
    activeFilters: { types: [], theories: [] },
    articleTypes: [{ value: "essay", label: "Essay", count: 1 }],
    theories: [],
  },
};
