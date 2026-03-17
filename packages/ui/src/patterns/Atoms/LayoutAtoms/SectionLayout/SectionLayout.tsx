import styles from './SectionLayout.module.scss';
import clsx from 'clsx';

interface SectionLayoutProps {
  variant?: 'centered' | 'split' | 'asymmetrical' | 'preview';
  bordered?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const SectionLayout = ({ variant = 'centered', bordered = false, children, className }: SectionLayoutProps) => {
  return (
    <section className={clsx(styles.container, styles[variant], bordered && styles['container--bordered'], className)}>
      {children}
    </section>
  );
};
