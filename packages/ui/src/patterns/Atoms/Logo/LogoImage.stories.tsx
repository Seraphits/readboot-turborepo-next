"use client";

import type { Meta, StoryObj } from "@storybook/react";
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

/** Storybook-only client wrapper: fetches the same logo as the Server Component */
function LogoImageStoryWrapper({
  width = "100%",
  height = "100%",
}: {
  width?: string | number;
  height?: string | number;
}) {
  const [logo, setLogo] = useState<{ sourceUrl: string; altText: string } | null>(null);

  useEffect(() => {
    fetch("https://readboot.cloudaccess.host/graphql", {
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
    <div style={{ position: "relative", width, height, display: "block" }}>
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

const meta = {
  title: "Atoms/Logo",
  component: LogoImageStoryWrapper,
  parameters: { layout: "centered" },
  argTypes: {
    width: { control: { type: "text" } },
    height: { control: { type: "text" } },
  },
} satisfies Meta<typeof LogoImageStoryWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { width: "120px", height: "48px" },
};

// export const Small: Story = {
//   args: { width: "80px", height: "32px" },
// };

// export const Large: Story = {
//   args: { width: "200px", height: "80px" },
// };

// export const FillContainer: Story = {
//   args: { width: "100%", height: "100%" },
//   decorators: [
//     (Story) => (
//       <div style={{ width: 150, height: 60, border: "1px dashed #ccc" }}>
//         <Story />
//       </div>
//     ),
//   ],
// };
