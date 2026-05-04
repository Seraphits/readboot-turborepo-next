import React from "react";
import styles from "./Spacing.module.scss";

interface SpacingItemProps {
  label: string;
  variable: string;
  pixelValue: string;
  remValue: string;
}

export const SpacingItem = ({
  label,
  variable,
  pixelValue,
  remValue,
}: SpacingItemProps) => {
  return (
    <div className={styles["spacing-row"]}>
      <div
        className={styles["spacing-row__visual"]}
        style={{ width: remValue }}
        aria-hidden="true"
      />
      <div className={styles["spacing-row__meta"]}>
        <strong>
          {label.toUpperCase()} ({pixelValue})
        </strong>
        <code>
          {variable} — {remValue}
        </code>
      </div>
    </div>
  );
};

export const SpacingScale = () => {
  const scale = [
    { label: "xs", var: "$space-xs", px: "4px", rem: "0.25rem" },
    { label: "sm", var: "$space-sm", px: "8px", rem: "0.5rem" },
    { label: "md", var: "$space-md", px: "12px", rem: "0.75rem" },
    { label: "lg", var: "$space-lg", px: "16px", rem: "1rem" },
    { label: "xl", var: "$space-xl", px: "24px", rem: "1.5rem" },
    { label: "2xl", var: "$space-2xl", px: "32px", rem: "2rem" },
    { label: "3xl", var: "$space-3xl", px: "48px", rem: "3rem" },
  ];

  return (
    <section>
      {scale.map((item) => (
        <SpacingItem
          key={item.label}
          label={item.label}
          variable={item.var}
          pixelValue={item.px}
          remValue={item.rem}
        />
      ))}
    </section>
  );
};
