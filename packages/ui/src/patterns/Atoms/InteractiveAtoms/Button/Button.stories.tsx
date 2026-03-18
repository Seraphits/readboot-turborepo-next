import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import pairingKeys from '../../Atoms/BrandingAtoms/Colors/_colors-pairings.module.scss';

const meta: Meta<typeof Button> = {
  title: 'Style Guide/3. Buttons',
  component: Button,
};
export default meta;

export const AllButtonVariants: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
      {Object.keys(pairingKeys).map((variant) => (
        <div key={variant} style={{ textAlign: 'center' }}>
          <Button variant={variant as any}>
            {variant.split('-')}
          </Button>
          <p style={{ fontSize: '0.7rem', marginTop: '0.5rem' }}>{variant}</p>
        </div>
      ))}
    </div>
  ),
};
