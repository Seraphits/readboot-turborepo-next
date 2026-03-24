import type { Meta, StoryObj } from '@storybook/react';
import { Badge, type BadgeVariant } from './Badge';

const BADGE_VARIANTS = ['primary', 'success', 'outline', 'ghost'] as const satisfies readonly BadgeVariant[];

const meta: Meta<typeof Badge> = {
  component: Badge,
  parameters: {
    docs: {
      description: {
        component:
          'Small uppercase label. Variants map to pairing-adjacent colors; `asChild` composes with `Slot` (e.g. wrap a `span`).',
      },
    },
  },
};
export default meta;

export const Primary: StoryObj<typeof Badge> = {
  args: {
    variant: 'primary',
    children: 'Active build',
  },
};

export const AllVariants: StoryObj<typeof Badge> = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
      {BADGE_VARIANTS.map((variant) => (
        <Badge key={variant} variant={variant}>
          {variant}
        </Badge>
      ))}
    </div>
  ),
};

export const AsChild: StoryObj<typeof Badge> = {
  render: () => (
    <Badge asChild variant="outline">
      <span>Composed via Slot</span>
    </Badge>
  ),
};
