import React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'action';
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
