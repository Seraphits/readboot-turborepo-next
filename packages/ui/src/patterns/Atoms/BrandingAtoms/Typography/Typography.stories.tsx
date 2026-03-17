import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Branding/Typography',
  component: Typography,
};
export default meta;

export const AllVariants: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Typography as="h1" variant="h1">
        H1: Baloo 2 Display (48px)
      </Typography>
      <Typography as="h2" variant="h2">
        H2: Baloo 2 Display (36px)
      </Typography>
      <Typography as="p" variant="body">
        Body: Inter Academic. This text scales via rem units to ensure
        accessibility for all users while maintaining the brand&apos;s clean tone.
      </Typography>
      <Typography as="span" variant="caption" effects="glitch">
        Caption: System Fracture Glitch Effect
      </Typography>
    </div>
  ),
};
