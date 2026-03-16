import { ElementType, ReactNode } from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
  as?: 'main' | 'section' | 'article' | 'header' | 'footer' | 'div';
  children: ReactNode;
  className?: string;
}

export const Container = ({ as: Component = 'section', children, className = '' }: ContainerProps) => {
  return <Component className={`${styles.container} ${className}`}>{children}</Component>;
};
