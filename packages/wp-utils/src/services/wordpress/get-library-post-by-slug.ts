import type { LibraryEntry, LibraryWordPressPost } from "../../types";
import { normalizeLibraryEntry } from "../../utils/normalize-library-entry";
import { getWordPressData } from "./client";

const DEFAULT_LIBRARY_CATEGORY_SLUG = "readboot";
const DEFAULT_LIBRARY_REVALIDATE = 60;

export interface GetLibraryPostBySlugParams {
  categorySlug?: string;
}

interface GetLibraryPostBySlugResponse {
  post?: LibraryWordPressPost | null;
}

export async function getLibraryPostBySlug(
  slug: string,
  params: GetLibraryPostBySlugParams = {},
): Promise<LibraryEntry | null> {
  const { categorySlug = DEFAULT_LIBRARY_CATEGORY_SLUG } = params;

  const query = `
    query GetLibraryPostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        title
        slug
        date
        excerpt
        content
        categories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        postFields {
          articleType
          theory
        }
      }
    }
  `;

  const data = (await getWordPressData(
    query,
    { slug },
    {
      revalidate: DEFAULT_LIBRARY_REVALIDATE,
      tags: ["library-post", `library-post:${slug}`],
    },
  )) as GetLibraryPostBySlugResponse | undefined;

  const post = data?.post;
  if (!post) {
    return null;
  }

  return normalizeLibraryEntry(post, categorySlug);
}
