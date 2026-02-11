export default function IconographyPage() {
  return (
    <section>
      <h1>Iconography</h1>
      <p>
        Icons are part of ReadBoot&apos;s visual language. Keep stroke weight and sizing consistent
        so the system feels cohesive.
      </p>

      <h2>Icon Library</h2>
      <p>
        Approved SVG icons live in <code>@repo/ui</code> (e.g. under a dedicated <code>icons/</code> or
        <code>assets/icons/</code> folder). This page will show a gallery once icons are added to the package.
        Prefer inline SVG or a shared sprite so we can control fill and stroke via CSS.
      </p>

      <h2>Usage Rules</h2>
      <ul>
        <li><strong>Inline with text:</strong> 16px (1rem). Align with the cap height of body text (Inter).</li>
        <li><strong>Buttons and controls:</strong> 24px (1.5rem). Matches tap targets and button height.</li>
        <li><strong>Feature / empty states:</strong> 48px or 64px for large illustrative icons.</li>
        <li><strong>Stroke weight:</strong> Use a single weight across the set (e.g. 1.5px or 2px) so icons feel like one family.</li>
      </ul>

      <h2>Accessibility</h2>
      <p>
        Decorative icons should have <code>aria-hidden="true"</code>. Icons that convey meaning alone
        need <code>aria-label</code> or visible text. Prefer &quot;Submit&quot; + icon over icon-only
        for primary actions when space allows.
      </p>
    </section>
  );
}
