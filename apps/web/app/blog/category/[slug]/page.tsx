import type { Metadata } from "next";
import {
  getBlogCategoryForArchive,
  getBlogNavCategories,
  getPosts,
} from "@repo/wp-utils";
import { notFound } from "next/navigation";
import { blogPageCopy } from "../../../../content/blogPage";
import { BlogListingPage } from "../../BlogListingPage";

export const dynamic = "force-dynamic";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getBlogCategoryForArchive(slug);
  if (!category) {
    return { title: "Category | ReadBoot" };
  }
  return {
    title: `${category.name} | ${blogPageCopy.indexTitle} | ReadBoot`,
    description: blogPageCopy.indexDescription,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const [category, categoryNavItems] = await Promise.all([
    getBlogCategoryForArchive(slug),
    getBlogNavCategories(),
  ]);

  if (!category) {
    return notFound();
  }

  const bandTitle = `${blogPageCopy.categoryBandTitle}: ${category.name}`;
  const posts = await getPosts({
    categorySlug: slug,
    limit: 24,
    orderBy: "DATE",
    order: "DESC",
  });

  return (
    <BlogListingPage
      bandTitle={bandTitle}
      categoryNavItems={categoryNavItems}
      posts={posts}
      blogFromCategorySlug={slug}
      showBackToBlog
    />
  );
}
