/**
 * Color pairings match $color-pairings in packages/ui/src/styles/abstracts/variables/_colors.scss
 * and the set-color-scheme mixin in abstracts/mixins/_colors.scss.
 */
export const COLOR_PAIRINGS = {
  paper: { bg: "#FAF9F6", text: "#36454F" },
  "dark-paper": { bg: "#36454F", text: "#FAF9F6" },
  action: { bg: "#DC143C", text: "#FAF9F6" },
  error: { bg: "#DC143C", text: "#FAF9F6" },
  success: { bg: "#56F000", text: "#36454F" },
} as const;

export type ColorSchemeName = keyof typeof COLOR_PAIRINGS;

export const COLOR_SCHEME_NAMES: ColorSchemeName[] = [
  "paper",
  "dark-paper",
  "action",
  "error",
  "success",
];

export function ColorScheme({
  scheme,
  children,
  className,
  style,
  ...rest
}: {
  scheme: ColorSchemeName;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "style">) {
  const pairing = COLOR_PAIRINGS[scheme];
  return (
    <div
      style={{
        backgroundColor: pairing.bg,
        color: pairing.text,
        padding: "1rem",
        borderRadius: "8px",
        ...style,
      }}
      className={className}
      {...rest}
    >
      {children}
    </div>
  );
}
