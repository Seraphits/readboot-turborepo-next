import Image from "next/image";

interface LogoResponse {
  siteSettings: {
    siteSettings: {
      headerLogo: {
        sourceUrl: string;
        altText: string;
      };
    };
  };
}

interface NextFetchOptions extends RequestInit {
  next?: { revalidate?: number | false; tags?: string[] };
}

interface LogoProps {
  /** Optional override for width (e.g. '200px' or '100%') */
  width?: string | number;
  /** Optional override for height (e.g. '100px' or '100%') */
  height?: string | number;
  /** For passing Tailwind classes or custom SCSS from the Pattern Lab */
  className?: string;
}

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

const LOGO_ENDPOINT = process.env.NEXT_PUBLIC_WORDPRESS_API_URL ?? "https://readboot.cloudaccess.host/graphql";

/**
 * ReadBoot Logo Atom
 * Fetches the brandmark from Headless WordPress on the server.
 * Designed to fill its parent container while maintaining aspect ratio.
 */
const FETCH_TIMEOUT_MS = 8000;

export default async function LogoImage({
  width = "100%",
  height = "100%",
  className,
}: LogoProps) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const res = await fetch(LOGO_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: LOGO_QUERY }),
      signal: controller.signal,
      next: { revalidate: 3600 },
    } as NextFetchOptions);

    clearTimeout(timeoutId);
    const { data } = (await res.json()) as { data: LogoResponse };
    const logo = data?.siteSettings?.siteSettings?.headerLogo;

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
          alt={logo.altText || "ReadBoot Logo"}
          fill
          style={{ objectFit: "contain" }}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  } catch {
    clearTimeout(timeoutId);
    return null;
  }
}
