import React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'action'; // Add more as needed
  className?: string;
}

export function Button({ children, variant = 'default', className = '' }: ButtonProps) {
  // Logic: Always apply the 'button' class (the Base).
  // Only apply the modifier if the variant isn't 'default'.
  const combinedClasses = [
    styles.button,
    variant!== 'default'? styles[`button--${variant}`] : '',
    className
  ].join(' ').trim();

  return (
    <button className={combinedClasses} type="button">
      {children}
    </button>
  );
}
