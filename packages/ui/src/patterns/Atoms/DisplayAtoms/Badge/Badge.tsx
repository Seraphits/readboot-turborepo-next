import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import styles from './Badge.module.scss';
import clsx from 'clsx';

// Variants reflect visual styles, not just business logic
export type BadgeVariant = 'primary' | 'success' | 'outline' | 'ghost';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  asChild?: boolean;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'primary', asChild = false,...props }, ref) => {
    const Comp = asChild? Slot : 'span';

    return (
      <Comp
        ref={ref}
        className={clsx(
          styles.badge,
          styles[`badge--${variant}`],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';
