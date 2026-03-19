import styles from './page.module.scss';
import { SectionIntro } from '../components/SectionIntro';
import { TokenCard } from '../components/TokenCard';

type SwatchKind = 'paper' | 'ink' | 'action';

function ColorSwatch({ name, variable, swatchKind }: { name: string; variable: string; swatchKind: SwatchKind }) {
  return (
    <TokenCard label={name} token={variable} previewClassName={`${styles.tokenPreview} ${styles[swatchKind]}`} />
  );
}

export default function StyleGuide() {
  return (
    <div className={styles.page}>
      <section>
        <SectionIntro
          headingLevel={1}
          title="Typography Defaults"
          description={<>This page demonstrates the global styles defined in <code>base/typography.scss</code>.</>}
        />

        <hr />

        <h2>Headings</h2>
        <h1>H1: Glitch Headline (3rem)</h1>
        <h2>H2: Glitch Sub-headline (2.5rem)</h2>
        <h3>H3: Glitch Section Header (2rem)</h3>
        <h4>H4: Default Header</h4>
        <h5>H5: Small Header</h5>
        <h6>H6: Subtitle Header</h6>

        <hr />

        <h2>Body Text</h2>
        <p>
          This is a standard paragraph (<code>p</code>) using the
          <strong>$sys-font-body</strong> variable. It has a default
          line-height of 1.6 and uses the charcoal ink color.
        </p>
        <p>
          <a href="#">This is a global link default</a>. It inherits
          the text color and has a 0.8 opacity hover state.
        </p>
      </section>

      <section className={styles.sectionGap}>
        <SectionIntro
          title="System Tokens"
          description={<>These values are controlled via <code>abstracts/variables/_colors.scss</code>.</>}
        />
        <div className={styles.tokenSwatchRow}>
          <ColorSwatch name="Paper BG" variable="$sys-color-paper-bg" swatchKind="paper" />
          <ColorSwatch name="Ink Text" variable="$sys-color-ink-text" swatchKind="ink" />
          <ColorSwatch name="Action Primary" variable="$sys-color-action-primary" swatchKind="action" />
        </div>
      </section>
    </div>
  );
}
