import { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './Typography.module.scss';

interface TypographyBaseProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'link';
  children: ReactNode;
  className?: string;
}

type TypographyProps<T extends ElementType> = TypographyBaseProps &
  { as?: T } &
  Omit<ComponentPropsWithoutRef<T>, keyof TypographyBaseProps>;

export const Typography = <T extends ElementType = 'p'>({
  as,
  variant = 'body',
  className = '',
  children,
...props
}: TypographyProps<T>) => {
  // 1. Fix logical OR syntax (||). 2. Cast as 'any' to bypass complex polymorphic signatures.
  const Component = (as || (variant.startsWith('h')? variant : variant === 'link'? 'a' : 'p')) as any;

  return (
    <Component className={`${styles.typography} ${styles[`typography--${variant}`]} ${className}`} {...props}>
      {children}
    </Component>
  );
};
