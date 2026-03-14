import React from 'react';

/**
 * Mock for next/image used in Storybook (react-vite framework).
 * Replaces Next.js Image with a plain img to avoid Next.js config loading.
 * Ignores fill, priority, sizes - passes through standard img props.
 */
export default function MockNextImage(
  props: React.ComponentProps<'img'> & { fill?: boolean; priority?: boolean; sizes?: string }
) {
  const { src, alt, fill, priority, sizes, style, ...rest } = props;
  return (
    <img
      src={src as string}
      alt={alt ?? ''}
      style={{ width: '100%', height: '100%', objectFit: 'contain', ...style }}
      {...rest}
    />
  );
}
