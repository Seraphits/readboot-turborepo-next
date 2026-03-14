import styles from './Colors.module.scss';

interface ColorSwatchProps {
  name: string;
  variable: string;
  hex: string;
}

export const ColorSwatch = ({ name, variable, hex }: ColorSwatchProps) => {
  return (
    <article className={styles.swatch}>
      <div className={styles.swatch__preview} style={{ backgroundColor: hex }} />
      <div className={styles.swatch__info}>
        <strong>{name}</strong>
        <code>{variable}</code>
        <small>{hex}</small>
      </div>
    </article>
  );
};
