/** Story-only swatch card (Futurist Carton: 4px charcoal rule, 12px radius). No framework SCSS import. */
const shell = {
  border: "4px solid #36454F",
  borderRadius: "12px",
  overflow: "hidden" as const,
  background: "#FAF9F6",
};

interface ColorSwatchProps {
  name: string;
  variable: string;
  hex: string;
}

export const ColorSwatch = ({ name, variable, hex }: ColorSwatchProps) => {
  return (
    <article style={shell}>
      <div style={{ height: "96px", width: "100%", backgroundColor: hex }} />
      <div
        style={{
          padding: "0.75rem 1rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
        }}
      >
        <strong style={{ fontFamily: "'Baloo 2', cursive", fontSize: "0.95rem" }}>
          {name}
        </strong>
        <code style={{ fontSize: "0.75rem", wordBreak: "break-all" }}>{variable}</code>
        <small style={{ fontSize: "0.7rem", opacity: 0.85 }}>{hex}</small>
      </div>
    </article>
  );
};
