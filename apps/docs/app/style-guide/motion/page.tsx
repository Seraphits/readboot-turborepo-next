export default function MotionPage() {
  return (
    <section>
      <h1>Motion & Animation</h1>
      <p>
        ReadBoot uses motion to reinforce the &quot;Futurist Carton&quot; brand: bouncy, deliberate,
        and occasionally glitchy. All timing and keyframes live in <code>@repo/ui</code> base styles.
      </p>

      <h2>Duration Scale</h2>
      <p>Use these tokens for consistent speed across the system.</p>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "2rem" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #36454F" }}>
            <th style={{ textAlign: "left", padding: "0.5rem" }}>Token</th>
            <th style={{ textAlign: "left", padding: "0.5rem" }}>Value</th>
            <th style={{ textAlign: "left", padding: "0.5rem" }}>Use for</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: "1px solid #eee" }}>
            <td style={{ padding: "0.5rem" }}><code>fast</code></td>
            <td style={{ padding: "0.5rem" }}>100ms</td>
            <td style={{ padding: "0.5rem" }}>Micro-feedback (focus ring, icon toggle)</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #eee" }}>
            <td style={{ padding: "0.5rem" }}><code>base</code></td>
            <td style={{ padding: "0.5rem" }}>250ms</td>
            <td style={{ padding: "0.5rem" }}>Hover, small transitions, button scale</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #eee" }}>
            <td style={{ padding: "0.5rem" }}><code>slow</code></td>
            <td style={{ padding: "0.5rem" }}>500ms</td>
            <td style={{ padding: "0.5rem" }}>Panel open/close, modals, page-level transitions</td>
          </tr>
        </tbody>
      </table>

      <h2>Easing Curves</h2>
      <ul style={{ marginBottom: "2rem" }}>
        <li><strong>ease-out</strong> — Use for elements <em>entering</em> (e.g. dropdown opening, modal in). Feels natural as motion decelerates into place.</li>
        <li><strong>ease-in</strong> — Use for elements <em>exiting</em> (e.g. dropdown closing). Accelerates away.</li>
        <li><strong>Bouncy (cubic-bezier)</strong> — Use for interactive feedback (buttons, cards). Our buttons use <code>scale(1.05)</code> with a bouncy curve for hover.</li>
      </ul>

      <h2>Interaction States</h2>
      <p>Beyond the glitch effect, components should have clear hover, focus, and active states.</p>
      <ul>
        <li><strong>Hover:</strong> Slight scale (1.05) and/or opacity change; use base duration (250ms) and bouncy easing.</li>
        <li><strong>Focus:</strong> Visible focus ring (e.g. 2px outline) for accessibility; fast duration (100ms).</li>
        <li><strong>Active:</strong> Brief scale-down or opacity pulse on click for tactile feedback.</li>
      </ul>

      <h2>Glitch Effect</h2>
      <p>
        Keyframes are defined in <code>packages/ui/src/styles/base/animations.scss</code> (e.g. <code>glitch-anim</code>).
        Apply the <code>.fx--glitch</code> class to symbolize &quot;critical system breaks&quot; or editorial emphasis.
        Use sparingly so it stays impactful.
      </p>
    </section>
  );
}
