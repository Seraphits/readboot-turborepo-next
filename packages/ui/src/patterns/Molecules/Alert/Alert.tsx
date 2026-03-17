import { ElementType, ReactNode } from 'react';
import styles from './Alert.module.scss';

const DEFAULT_MESSAGE =
  "🛠️ Status: Live Engineering Lab. This portfolio is being architected in public using Next.js Turborepo and headless WordPress. Follow the blog to see the system's evolution.";

export interface AlertProps<T extends ElementType = 'aside'> {
  as?: T;
  children?: ReactNode;
}

export const Alert = <T extends ElementType = 'aside'>({
  as,
  children = DEFAULT_MESSAGE,
  ...props
}: AlertProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof AlertProps<T>>) => {
  const Component = (as ?? 'aside') as ElementType;

  return (
    <Component className={styles.banner} aria-label="Engineering Status" {...props}>
      {children}
    </Component>
  );
};
