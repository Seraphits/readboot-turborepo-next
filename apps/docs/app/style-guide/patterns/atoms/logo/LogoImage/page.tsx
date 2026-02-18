import LogoImage from "@repo/ui/patterns/Atoms/Logo/LogoImage";

export default function LogoImagePage() {
  return (
    <section>
      <h1>Logo</h1>
      <p>The ReadBoot logo fetched from Headless WordPress.</p>
      <div style={{ width: 120, height: 48 }}>
        <LogoImage />
      </div>
    </section>
  );
}
