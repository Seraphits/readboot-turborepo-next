type SpacingStep = { step: string; rem: string; px: string; usage: string };

const spacingScale: SpacingStep[] = [
  { step: "0", rem: "0", px: "0px", usage: "Reset / none" },
  { step: "1", rem: "0.25rem", px: "4px", usage: "Tight inline" },
  { step: "2", rem: "0.5rem", px: "8px", usage: "Inline gap" },
  { step: "3", rem: "0.75rem", px: "12px", usage: "Small padding" },
  { step: "4", rem: "1rem", px: "16px", usage: "Base spacing" },
  { step: "5", rem: "1.5rem", px: "24px", usage: "Section gap" },
  { step: "6", rem: "2rem", px: "32px", usage: "Block margin" },
  { step: "8", rem: "3rem", px: "48px", usage: "Large section" },
];

export default function SpacingPage() {
  return (
    <section>
      <h1>Spacing Scale</h1>
      <p>We use a soft 8-point grid system to maintain visual rhythm.</p>

      <table>
        <thead>
          <tr>
            <th>Visual</th>
            <th>Value (REM)</th>
            <th>Pixels</th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          {spacingScale.map((s) => (
            <tr key={s.step}>
              <td><div style={{ width: s.px, height: '20px', backgroundColor: '#DC143C' }} /></td>
              <td><code>{s.rem}</code></td>
              <td>{s.px}</td>
              <td>{s.usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
