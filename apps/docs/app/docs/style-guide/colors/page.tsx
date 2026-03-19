type RefColor = { name: string; var: string; swatchClass: string };
type SysColor = { var: string; usage: string };
import { SectionIntro } from '../components/SectionIntro';
import { TokenCard } from '../components/TokenCard';
import styles from './page.module.scss';

const referenceColors: RefColor[] = [
  { name: "Offwhite", var: "$ref-color-offwhite", swatchClass: 'swatch--offwhite' },
  { name: "Charcoal", var: "$ref-color-charcoal", swatchClass: 'swatch--charcoal' },
  { name: "Crimson", var: "$ref-color-crimson", swatchClass: 'swatch--crimson' },
  { name: "Yellow", var: "$ref-color-yellow", swatchClass: 'swatch--yellow' },
  { name: "Teal", var: "$ref-color-teal", swatchClass: 'swatch--teal' },
  { name: "Green", var: "$ref-color-green", swatchClass: 'swatch--green' },
  { name: "Purple", var: "$ref-color-purple", swatchClass: 'swatch--purple' },
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
      <SectionIntro
        headingLevel={1}
        title="Colors & Tokens"
        description="Our color system is built on a two-tier token architecture for maximum flexibility."
      />

      <SectionIntro title="Primitive Tokens (Ref)" description={<>Raw brand colors defined in <code>_colors.scss</code>.</>} />
      <div className={styles.tokenGrid}>
        {referenceColors.map((color) => (
          <ColorCard key={color.var} {...color} />
        ))}
      </div>

      <div className={styles.sectionTop}>
        <SectionIntro
          title="Color Combinations (Pairings)"
          description="Pairing demos from the legacy static docs are being retired. This section will be rebuilt as WordPress-backed documentation with Storybook-powered live examples."
        />
      </div>

      <div className={styles.sectionTop}>
        <SectionIntro
          title="Semantic Tokens (Sys)"
          description="Context-aware tokens mapped to primitives for consistent usage."
        />
      </div>
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

function ColorCard({ name, var: variable, swatchClass }: RefColor) {
  return (
    <TokenCard label={name} token={variable} previewClassName={`${styles.swatch} ${styles[swatchClass]}`} />
  );
}
