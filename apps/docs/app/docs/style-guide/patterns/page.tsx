import { Button } from "@repo/ui/atoms";

export default function ComponentsPage() {
  return (
    <section>
      <h1>Component Library</h1>
      <p>Interactive demos of shared components from the <code>@repo/ui</code> package.</p>

      <h2>Rebuild In Progress</h2>
      <p>
        The previous static Pattern Lab examples are being retired. This page will be rebuilt using
        WordPress-backed documentation content with Storybook-powered component previews.
      </p>

      <h2>Button</h2>
      <p>Buttons trigger actions and come with a standard bounce effect on hover.</p>

      <div style={{ display: 'flex', gap: '1rem', padding: '2rem', border: '1px dashed #36454F', borderRadius: '12px' }}>
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
      <pre style={{ padding: '1rem', backgroundColor: '#FAF9F6', border: '1px solid #36454F', borderRadius: '12px' }}>
        <code>{`import { Button } from "@repo/ui/atoms";\n\n<Button>Click Me</Button>`}</code>
      </pre>
    </section>
  );
}
