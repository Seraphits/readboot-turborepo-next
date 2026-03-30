import React, { ElementType } from 'react';
import styles from './SectionLayout.module.scss';
import clsx from 'clsx';

export type SectionLayoutVariant =

| 'centered'
| 'split'
| 'asymmetrical'
| 'preview'
| 'newspaper'
| 'stack'
| 'grid'
| 'showcase'; // Added 'showcase' variant

interface SectionLayoutProps {
  as?: ElementType;
  variant?: SectionLayoutVariant;
  bordered?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const SectionLayout = ({
  as: Component = 'section',
  variant = 'centered',
  bordered = false,
  children,
  className
}: SectionLayoutProps) => {
  return (
    <Component
      className={clsx(
        styles['section-layout'],
        styles[`section-layout--${variant}`],
        bordered && styles['section-layout--bordered'],
        className
      )}
    >
      {children}
    </Component>
  );
};
