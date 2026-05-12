import type { Metadata } from "next";
import { getLibraryPostBySlug, WPContent } from "@repo/wp-utils";
import {
  ContentArticle,
  ContentArticleHeader,
  ContentFeaturedImage,
} from "@repo/ui/sites";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

interface LibraryEntryPageProps {
  params: Promise<{ slug: string }>;
}

function stripHtml(html: string | undefined): string | undefined {
  if (!html) {
    return undefined;
  }

  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export async function generateMetadata({
  params,
}: LibraryEntryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getLibraryPostBySlug(slug);

  if (!entry) {
    return {
      title: "Library | ReadBoot",
    };
  }

  return {
    title: `${entry.title} | Library | ReadBoot`,
    description:
      stripHtml(entry.excerpt) ?? "ReadBoot library entry.",
    alternates: {
      canonical: `/library/${entry.slug}/`,
    },
  };
}

export default async function LibraryEntryPage({
  params,
}: LibraryEntryPageProps) {
  const { slug } = await params;
  const entry = await getLibraryPostBySlug(slug);

  if (!entry) {
    return notFound();
  }

  return (
    <ContentArticle
      header={
        <ContentArticleHeader
          title={entry.title}
          excerpt={entry.excerpt}
          articleType={entry.articleType}
          theories={entry.theories}
        />
      }
      featuredImage={
        entry.image ? (
          <ContentFeaturedImage image={entry.image} priority />
        ) : undefined
      }
    >
      <WPContent
        data={{
          title: entry.title,
          content: entry.contentHtml,
        }}
        renderTitle={false}
      />
    </ContentArticle>
  );
}
