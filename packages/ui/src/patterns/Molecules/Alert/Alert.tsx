import { ElementType, ReactNode } from 'react';
import styles from './Alert.module.scss';

const DEFAULT_MESSAGE =(
  <>
    🛠️ <strong>Active Build:</strong> Next.js + WordPress |
    <strong> Phase:</strong> Establishing structural 🦴bones🦴 via SCSS wireframing 📐
    <div>
      Learn why I prototype directly in code 🚀
    </div>
  </>
);

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
