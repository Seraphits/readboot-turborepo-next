import { Button, ColorScheme, COLOR_SCHEME_NAMES, ThreeLayerButton } from "@repo/ui";
import buttonBoxStyles from "@repo/ui/styles/components/three-layer-button-box.module.scss";

export default function ComponentsPage() {
  return (
    <section>
      <h1>Component Library</h1>
      <p>Interactive demos of shared components from the <code>@repo/ui</code> package.</p>

      <h2>ColorScheme</h2>
      <p>
        Renders a div with a background color and text color from the <code>$color-pairings</code> map.
        Use for surfaces (cards, banners, alerts) that need guaranteed contrast.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
        {COLOR_SCHEME_NAMES.map((scheme) => (
          <ColorScheme key={scheme} scheme={scheme}>
            {scheme}
          </ColorScheme>
        ))}
      </div>
      <pre style={{ padding: "1rem", backgroundColor: "#f4f4f4", borderRadius: "4px", marginBottom: "2rem" }}>
        <code>{`import { ColorScheme } from "@repo/ui";\n\n<ColorScheme scheme="paper">Content here</ColorScheme>\n<ColorScheme scheme="action">Primary surface</ColorScheme>`}</code>
      </pre>

      <h2>ThreeLayerButton</h2>
      <p>
        A 3D flip button. Hover to reveal &quot;Have Fun&quot; layers. Uses ReadBoot tokens: 4px charcoal border,
        12px radius, Baloo 2. Requires <code>threeLayerButtonBox</code> for perspective and room.
      </p>
      <div className={buttonBoxStyles.threeLayerButtonBox}>
        <ThreeLayerButton>Click Me</ThreeLayerButton>
        <ThreeLayerButton>Get Started</ThreeLayerButton>
        <ThreeLayerButton href="/style-guide">As Link</ThreeLayerButton>
      </div>
      <pre style={{ padding: "1rem", backgroundColor: "#f4f4f4", borderRadius: "4px", marginBottom: "2rem" }}>
        <code>{`import { ThreeLayerButton } from "@repo/ui";\nimport buttonBoxStyles from "@repo/ui/styles/three-layer-button-box";\n\n<div className={buttonBoxStyles.threeLayerButtonBox}>\n  <ThreeLayerButton>All</ThreeLayerButton>\n  <ThreeLayerButton href="/imagine">IMAGINE</ThreeLayerButton>\n</div>`}</code>
      </pre>

      <h2>Button</h2>
      <p>Buttons trigger actions and come with a standard bounce effect on hover.</p>

      <div style={{ display: 'flex', gap: '1rem', padding: '2rem', border: '1px dashed #ccc', borderRadius: '8px' }}>
        <div>
          <p><small>Default State</small></p>
          <Button>Action Button</Button>
        </div>
        <div>
          <p><small>With Custom Content</small></p>
          <Button>Submit Order →</Button>
        </div>
      </div>

      <h3 style={{ marginTop: '2rem' }}>Usage Example</h3>
      <pre style={{ padding: '1rem', backgroundColor: '#f4f4f4', borderRadius: '4px' }}>
        <code>{`import { Button } from "@repo/ui";\n\n<Button>Click Me</Button>`}</code>
      </pre>
    </section>
  );
}
