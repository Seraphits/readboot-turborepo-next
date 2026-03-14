import React from 'react';

/**
 * Mock for next/link used in Storybook (react-vite framework).
 * Renders a plain <a> to avoid Next.js router and process.env usage.
 */
export default function MockNextLink({
  href,
  children,
  className,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children?: React.ReactNode }) {
  return (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  );
}
