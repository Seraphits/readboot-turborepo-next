import React from 'react';
import styles from './button.module.scss';
import clsx from 'clsx';
// Import the pairing keys directly from your SCSS module
import pairingKeys from '../../Atoms/BrandingAtoms/Colors/_colors-pairings.module.scss';

// 1. DYNAMIC TYPE: This automatically becomes 'alert' | 'action-on-light' | etc.
export type ButtonVariant = keyof typeof pairingKeys;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'ink-dark-on-paper-light',
  className,
  children,
 ...props
}) => {
  // 2. Class Mapping: matches the &--#{$name} loop in your button.module.scss
  const variantClass = styles[`button--${variant}`];

  return (
    <button
      className={clsx(styles.button, variantClass, className)}
      {...props}
    >
      {children}
    </button>
  );
};
