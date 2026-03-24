import type { Meta, StoryObj } from '@storybook/react';
import { PAIRING_KEYS } from './pairingKeys';
import styles from './_colors-pairings.module.scss';

const meta: Meta = {
  parameters: {
    docs: {
      description: {
        component: [
          'Pairing keys map to `_colors-pairings.module.scss` (`$color-pairings`) and `@include colors.apply-pairing(\'…\')` from `_colors-mixins.scss`.',
          'Keys are exported as `PAIRING_KEYS` / `PairingKey` in `pairingKeys.ts` (e.g. Button variants).',
        ].join(' '),
      },
    },
  },
};
export default meta;

const frame = {
  borderStyle: 'solid' as const,
  borderWidth: 4,
  borderRadius: 12,
  padding: '1.25rem',
};

export const PairingRules: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {PAIRING_KEYS.map((key) => (
        <div key={key} className={styles[`pairing--${key}`]} style={frame}>
          <code
            style={{
              display: 'block',
              fontSize: '0.8rem',
              marginBottom: '0.75rem',
              wordBreak: 'break-all',
            }}
          >
            {`@include colors.apply-pairing('${key}');`}
          </code>
          <p style={{ margin: 0, fontWeight: 700 }}>{key}</p>
          <p style={{ margin: '0.5rem 0 0', opacity: 0.95 }}>
            Preview uses CSS module class <code>pairing--{key}</code> (same bg / text / border as the mixin).
          </p>
        </div>
      ))}
    </div>
  ),
};
