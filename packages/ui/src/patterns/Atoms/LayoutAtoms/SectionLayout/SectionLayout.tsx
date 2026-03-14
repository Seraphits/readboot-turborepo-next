import styles from './SectionLayout.module.scss';
import clsx from 'clsx';

interface SectionLayoutProps {
  variant?: 'centered' | 'split' | 'asymmetrical' | 'preview';
  children: React.ReactNode;
  className?: string;
}

export const SectionLayout = ({ variant = 'centered', children, className }: SectionLayoutProps) => {
  return (
    <section className={clsx(styles.container, styles[variant], className)}>
      {children}
    </section>
  );
};
