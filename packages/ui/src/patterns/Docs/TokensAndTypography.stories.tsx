import type { Meta, StoryObj } from '@storybook/react';
import { Markdown } from '@storybook/addon-docs/blocks';
import tokensTypographyDoc from './TokensAndTypography.md?raw';

const meta = {
  parameters: {
    docs: {
      description: {
        component:
          'ReadBoot guide: **reference vs system** color tokens, **pairings** mixin keys, and **Typography** usage. Source: `TokensAndTypography.md` (rendered below via `Markdown`).',
      },
    },
  },
} satisfies Meta;

export default meta;

/**
 * Phase 2e “how to use” for tokens + typography.
 * Plain `.md` + `?raw` avoids Storybook’s MDX compiler error (`FunctionDeclaration` in this repo); content is still authorable as Markdown.
 */
export const TokensAndTypography: StoryObj = {
  render: () => <Markdown>{tokensTypographyDoc}</Markdown>,
};
