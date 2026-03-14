import type { Meta, StoryObj } from '@storybook/react';
import { ColorSwatch } from './ColorSwatch';

const meta: Meta = {
  title: 'Atoms/Branding Atoms/Colors',
};
export default meta;

export const Palette: StoryObj = {
  render: () => (
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
      <ColorSwatch name="Paper BG" variable="$sys-color-paper-bg" hex="#FAF9F6" />
      <ColorSwatch name="Ink Text" variable="$sys-color-ink-text" hex="#36454F" />
      <ColorSwatch name="Action Primary" variable="$sys-color-action-primary" hex="#DC143C" />
    </section>
  ),
};
