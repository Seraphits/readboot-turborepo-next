"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const LOGO_QUERY = `
  query GetLogo {
    siteSettings {
      siteSettings {
        headerLogo {
          sourceUrl
          altText
        }
      }
    }
  }
`;

/** Client-side logo for Storybook and other client contexts. */
export function LogoImageClient({
  width = "100%",
  height = "100%",
  className,
}: {
  width?: string | number;
  height?: string | number;
  className?: string;
}) {
  const [logo, setLogo] = useState<{ sourceUrl: string; altText: string } | null>(null);

  useEffect(() => {
    const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_API_URL ?? "https://readboot.cloudaccess.host/graphql";
    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: LOGO_QUERY }),
    })
      .then((res) => res.json())
      .then((json) => {
        const headerLogo = json.data?.siteSettings?.siteSettings?.headerLogo;
        if (headerLogo?.sourceUrl) {
          setLogo({ sourceUrl: headerLogo.sourceUrl, altText: headerLogo.altText || "ReadBoot Logo" });
        }
      });
  }, []);

  if (!logo?.sourceUrl) return <div style={{ width, height, background: "#eee" }}>Loading logo…</div>;

  return (
    <div className={className} style={{ position: "relative", width, height, display: "block" }}>
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
