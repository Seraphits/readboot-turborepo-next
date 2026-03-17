import React from 'react';
import styles from './button.module.scss';
import { ALLOWED_COMBINATIONS } from '../../BrandingAtoms/Colors/colors-data';

export type ButtonVariant = (typeof ALLOWED_COMBINATIONS)[number]['name'];

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  children,
  variant = 'default',
  className = '',
  type = 'button',
}: ButtonProps) {
  const combinedClasses = [
    styles.button,
    variant !== 'default' ? styles[`button--${variant}`] : '',
    className,
  ]
    .join(' ')
    .trim();

  return (
    <button className={combinedClasses} type={type}>
      {children}
    </button>
  );
}
