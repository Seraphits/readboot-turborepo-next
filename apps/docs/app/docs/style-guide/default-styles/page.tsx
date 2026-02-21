function ColorSwatch({ name, variable, hex }: { name: string; variable: string; hex: string }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
      <div style={{ backgroundColor: hex, height: '50px', width: '100px', borderRadius: '4px', marginBottom: '0.5rem' }}></div>
      <strong>{name}</strong>
      <code style={{ display: 'block', fontSize: '0.8rem' }}>{variable}</code>
    </div>
  );
}

export default function StyleGuide() {
  return (
    <div>
      <section>
        <h1>Typography Defaults</h1>
        <p>This page demonstrates the global styles defined in <code>base/typography.scss</code>.</p>

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

      <section style={{ marginTop: '4rem' }}>
        <h2>System Tokens</h2>
        <p>These values are controlled via <code>abstracts/variables/_colors.scss</code>.</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <ColorSwatch name="Paper BG" variable="$sys-color-paper-bg" hex="#FAF9F6" />
          <ColorSwatch name="Ink Text" variable="$sys-color-ink-text" hex="#36454F" />
          <ColorSwatch name="Action Primary" variable="$sys-color-action-primary" hex="#DC143C" />
        </div>
      </section>
    </div>
  );
}
