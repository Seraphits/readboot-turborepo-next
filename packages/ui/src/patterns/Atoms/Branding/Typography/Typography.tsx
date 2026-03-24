import React from 'react';
import styles from './Typography.module.scss';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'link';

interface TypographyProps<T extends React.ElementType> {
  as?: T;
  variant?: TypographyVariant;
  children: React.ReactNode;
  className?: string;
}

export const Typography = <T extends React.ElementType = 'p'>({
  as,
  variant = 'body',
  children,
  className = '',
  ...props
}: TypographyProps<T> & React.ComponentPropsWithoutRef<T>) => {
  const Component = as ?? (variant === 'link' ? 'a' : variant.startsWith('h') ? variant : 'p');

  const combinedClasses = [
    styles.typography,
    styles[`typography--${variant}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={combinedClasses} {...props}>
      {children}
    </Component>
  );
};
