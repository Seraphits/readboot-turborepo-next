import Image from "next/image";
import { getLogoData } from "@repo/wp-utils";
import type { LogoProps } from "@repo/wp-utils";

/**
 * ReadBoot Logo Atom
 * Fetches the brandmark from Headless WordPress on the server.
 * Designed to fill its parent container while maintaining aspect ratio.
 */
export default async function LogoImage({
  width = "100%",
  height = "100%",
  className,
}: LogoProps) {
  const logo = await getLogoData({ revalidate: 3600 });

  if (!logo?.sourceUrl) return null;

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width,
        height,
        display: "block",
      }}
    >
      <Image
        src={logo.sourceUrl}
        alt={logo.altText}
        fill
        style={{ objectFit: "contain" }}
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}
