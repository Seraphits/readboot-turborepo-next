import {
  ColorScheme,
  COLOR_SCHEME_NAMES,
  type ColorSchemeName,
} from "@repo/ui";

type RefColor = { name: string; var: string; hex: string };
type SysColor = { var: string; usage: string };

const SCHEME_LABELS: Record<ColorSchemeName, string> = {
  paper: "Paper (default surface)",
  "dark-paper": "Dark paper",
  action: "Action / primary",
  error: "Error state",
  success: "Success state",
};

const referenceColors: RefColor[] = [
  { name: "Offwhite", var: "$ref-color-offwhite", hex: "#FAF9F6" },
  { name: "Charcoal", var: "$ref-color-charcoal", hex: "#36454F" },
  { name: "Crimson", var: "$ref-color-crimson", hex: "#DC143C" },
  { name: "Yellow", var: "$ref-color-yellow", hex: "#FAD20A" },
  { name: "Teal", var: "$ref-color-teal", hex: "#29ECFF" },
  { name: "Green", var: "$ref-color-green", hex: "#56F000" },
  { name: "Purple", var: "$ref-color-purple", hex: "#905FEA" },
];

const systemColors: SysColor[] = [
  { var: "$sys-color-paper-bg", usage: "Page background" },
  { var: "$sys-color-ink-text", usage: "Body text" },
  { var: "$sys-color-action-primary", usage: "Primary actions, links" },
  { var: "$sys-color-dark-paper-bg", usage: "Dark mode background" },
  { var: "$sys-color-dark--ink-text", usage: "Dark mode text" },
  { var: "$sys-color-status-success", usage: "Success states" },
  { var: "$sys-color-status-warning", usage: "Warning states" },
  { var: "$sys-color-status-error", usage: "Error states" },
];

export default function ColorsPage() {
  return (
    <section>
      <h1>Colors & Tokens</h1>
      <p>Our color system is built on a two-tier token architecture for maximum flexibility.</p>

      <h2>Primitive Tokens (Ref)</h2>
      <p>Raw brand colors defined in <code>_colors.scss</code>.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
        {referenceColors.map((color) => (
          <ColorCard key={color.var} {...color} />
        ))}
      </div>

      <h2 style={{ marginTop: '3rem' }}>Color Combinations (Pairings)</h2>
      <p>
        Use the <code>ColorScheme</code> component or the <code>set-color-scheme</code> mixin for
        background + text pairs. These match <code>$color-pairings</code> in <code>_colors.scss</code>.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1rem", marginBottom: "3rem" }}>
        {COLOR_SCHEME_NAMES.map((scheme) => (
          <div key={scheme}>
            <div style={{ fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem" }}>
              {SCHEME_LABELS[scheme]}
            </div>
            <ColorScheme scheme={scheme}>
              Sample text in this combination. Use for surfaces and readable contrast.
            </ColorScheme>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: '3rem' }}>Semantic Tokens (Sys)</h2>
      <p>Context-aware tokens mapped to primitives for consistent usage.</p>
      <table>
        <thead>
          <tr>
            <th>Token Name</th>
            <th>Role / Usage</th>
          </tr>
        </thead>
        <tbody>
          {systemColors.map((color) => (
            <tr key={color.var}>
              <td><code>{color.var}</code></td>
              <td>{color.usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

function ColorCard({ name, var: variable, hex }: { name: string, var: string, hex: string }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' }}>
      <div style={{ backgroundColor: hex, height: '80px', borderRadius: '4px', marginBottom: '0.5rem', border: '1px solid #eee' }} />
      <div style={{ fontWeight: 'bold' }}>{name}</div>
      <code style={{ fontSize: '0.8rem' }}>{variable}</code>
    </div>
  );
}
