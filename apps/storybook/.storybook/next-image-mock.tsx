/* eslint-disable @next/next/no-img-element -- Deliberate next/image mock for Storybook (plain img). */
import React from 'react';

type StaticLike = { src: string };

function normalizeSrc(src: unknown): string {
  if (typeof src === 'string') return src;
  if (src && typeof src === 'object' && 'src' in src) {
    return String((src as StaticLike).src);
  }
  return '';
}

/**
 * Mock for next/image used in Storybook (react-vite framework).
 * Replaces Next.js Image with a plain img to avoid Next.js config loading.
 * Supports string URLs and Next.js `StaticImageData` ({ src, width, height, ... }).
 */
export default function MockNextImage(
  props: React.ComponentProps<'img'> & { fill?: boolean; priority?: boolean; sizes?: string }
) {
  const { src, alt, fill, priority, sizes, style, ...rest } = props;
  void fill;
  void priority;
  void sizes;
  const srcUrl = normalizeSrc(src);
  return (
    <img
      src={srcUrl}
      alt={alt ?? ''}
      style={{
        width: '100%',
        height: '100%',
        objectFit: fill ? 'cover' : 'contain',
        ...style,
      }}
      {...rest}
    />
  );
}
