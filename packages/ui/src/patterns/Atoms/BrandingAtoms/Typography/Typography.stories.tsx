import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typographic Atoms/Typography',
  component: Typography,
};
export default meta;

export const AllVariants: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Typography variant="h1" effects="glitch">Glitch H1 Headline</Typography>
      {/* 2. Fix: Explicitly use as="a" when passing href to ensure TS matches the props */}
      <Typography as="a" variant="link" href="https://readboot.com">
        Bouncy Portfolio Link
      </Typography>
      <Typography variant="body">Standard Inter body text.</Typography>
    </div>
  ),
};
