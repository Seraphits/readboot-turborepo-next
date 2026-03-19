import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPageByUri, WPContent } from '@repo/wp-utils';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pageData = await getPageByUri(slug);

  return {
    title: pageData?.title || 'Page Not Found',
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pageData = await getPageByUri(slug);

  if (!pageData) {
    notFound();
  }

  return (
    <>
      <h1>{pageData.title}</h1>
      <WPContent data={{ title: pageData.title, content: pageData.content }} renderTitle={false} />
    </>
  );
}
