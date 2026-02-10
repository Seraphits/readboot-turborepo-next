import Image from "next/image";

// 1. Define the structure of your GraphQL response
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

// 2. Define the Next.js fetch options to avoid 'any'
interface NextFetchOptions extends RequestInit {
  next?: {
    revalidate?: number | false;
    tags?: string;
  };
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

const LogoImage = async () => {
  // Use the custom interface instead of 'any'
  const response = await fetch('https://readboot.cloudaccess.host/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: LOGO_QUERY }),
    next: { revalidate: 60 }
  } as NextFetchOptions);

  // Cast the response JSON to your interface
  const { data } = (await response.json()) as { data: LogoResponse };
  const logo = data?.siteSettings?.siteSettings?.headerLogo;

  if (!logo?.sourceUrl) return null;

  return (
    <>
      <Image
        src={logo.sourceUrl}
        alt={logo.altText || "ReadBoot Logo"} // Fixed the pipe error
        layout="fill"
        priority
      />
    </>
  );
};

export default LogoImage;
