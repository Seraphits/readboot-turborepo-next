import styles from "../../Spatial/geometric/Geometric.module.scss";

interface ColorSwatchProps {
  name: string;
  variable: string;
  hex: string;
}

export const ColorSwatch = ({ name, variable, hex }: ColorSwatchProps) => {
  return (
    <article className={styles["swatch-layout"]}>
      <div
        className={styles["swatch-layout__preview"]}
        style={{ backgroundColor: hex }}
      />
      <div className={styles["swatch-layout__info"]}>
        <strong>{name}</strong>
        <code>{variable}</code>
        <small>{hex}</small>
      </div>
    </article>
  );
};
