import { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './Typography.module.scss';

interface TypographyBaseProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'link';
  effects?: 'glitch' | 'none';
  children: ReactNode;
  className?: string;
}

type TypographyProps<T extends ElementType> = TypographyBaseProps &
  { as?: T } &
  Omit<ComponentPropsWithoutRef<T>, keyof TypographyBaseProps>;

export const Typography = <T extends ElementType = 'p'>({
  as,
  variant = 'body',
  effects = 'none',
  className = '',
  children,
 ...props
}: TypographyProps<T>) => {
  // Logic: Default to variant if "as" is missing
  const Component = as || (variant.startsWith('h')? variant : variant === 'link'? 'a' : 'p');

  const combinedClasses = [
    styles.typography,
    styles[`typography--${variant}`],
    effects === 'glitch'? 'fx--glitch' : '', // References your global glitch animation
    className
  ].join(' ').trim();

  return <Component className={combinedClasses} {...props}>{children}</Component>;
};
