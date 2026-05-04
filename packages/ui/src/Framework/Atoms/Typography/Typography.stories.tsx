import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  component: Typography,
  parameters: {
    docs: {
      description: {
        component:
          'Maps `variant` to visual styles. Use semantic HTML via `as` when needed (e.g. `as="h1"` with `variant="h1"`). For `variant="link"` with `href`, use `as="a"` so TypeScript accepts anchor props. Inline emphasis: wrap with `<strong>` inside `body`.',
      },
    },
  },
};
export default meta;

const stack = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "1.25rem",
};
const label = {
  fontSize: "0.75rem",
  opacity: 0.75,
  marginBottom: "0.25rem",
  fontFamily: "var(--font-mono, monospace)",
};

export const AllVariants: StoryObj<typeof Typography> = {
  render: () => (
    <div style={{ ...stack, gap: "2rem", maxWidth: "40rem" }}>
      <section>
        <p style={label}>variant=&quot;h1&quot;</p>
        <Typography as="h1" variant="h1">
          Heading 1 — Baloo 2 display
        </Typography>
      </section>
      <section>
        <p style={label}>variant=&quot;h2&quot;</p>
        <Typography as="h2" variant="h2">
          Heading 2 — Baloo 2 display
        </Typography>
      </section>
      <section>
        <p style={label}>variant=&quot;h3&quot;</p>
        <Typography as="h3" variant="h3">
          Heading 3 — section title
        </Typography>
      </section>
      <section>
        <p style={label}>variant=&quot;h4&quot;</p>
        <Typography as="h4" variant="h4">
          Heading 4 — subsection
        </Typography>
      </section>
      <section>
        <p style={label}>variant=&quot;h5&quot;</p>
        <Typography as="h5" variant="h5">
          Heading 5 — label-scale headline
        </Typography>
      </section>
      <section>
        <p style={label}>variant=&quot;h6&quot;</p>
        <Typography as="h6" variant="h6">
          Heading 6 — smallest headline step
        </Typography>
      </section>
      <section>
        <p style={label}>variant=&quot;body&quot; (with &lt;strong&gt;)</p>
        <Typography as="p" variant="body">
          Body: Inter. Use <strong>strong</strong> for emphasis inside
          paragraphs when you need semantic bold, not a separate variant.
        </Typography>
      </section>
      <section>
        <p style={label}>variant=&quot;caption&quot;</p>
        <Typography as="span" variant="caption">
          Caption — metadata, labels, footnotes
        </Typography>
      </section>
      <section>
        <p style={label}>variant=&quot;link&quot;</p>
        <Typography as="a" variant="link" href="#typography-link-example">
          Link variant — action color, underline
        </Typography>
      </section>
    </div>
  ),
};
