import styles from './GridArea.module.scss';

interface GridAreaProps {
  area: 'content' | 'media';
  children: React.ReactNode;
}

export const GridArea = ({ area, children }: GridAreaProps) => {
  return <div style={{ gridArea: area }}>{children}</div>;
};
