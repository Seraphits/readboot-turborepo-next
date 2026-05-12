import type { LibraryEntry, LibraryWordPressPost } from "../../types";
import { normalizeLibraryEntry } from "../../utils/normalize-library-entry";
import { getWordPressData } from "./client";

const DEFAULT_LIBRARY_CATEGORY_SLUG = "readboot";
const DEFAULT_LIBRARY_LIMIT = 50;
const DEFAULT_LIBRARY_REVALIDATE = 60;

export interface GetLibraryPostsParams {
  categorySlug?: string;
  limit?: number;
  orderBy?: "DATE" | "TITLE" | "NAME";
  order?: "ASC" | "DESC";
}

interface GetLibraryPostsResponse {
  posts?: {
    nodes?: LibraryWordPressPost[];
  };
}

export async function getLibraryPosts(
  params: GetLibraryPostsParams = {},
): Promise<LibraryEntry[]> {
  const {
    categorySlug = DEFAULT_LIBRARY_CATEGORY_SLUG,
    limit = DEFAULT_LIBRARY_LIMIT,
    orderBy = "DATE",
    order = "DESC",
  } = params;

  const query = `
    query GetLibraryPosts(
      $categorySlug: String
      $limit: Int!
      $field: PostObjectsConnectionOrderbyEnum!
      $order: OrderEnum!
    ) {
      posts(
        where: {
          categoryName: $categorySlug
          orderby: { field: $field, order: $order }
        }
        first: $limit
      ) {
        nodes {
          id
          title
          slug
          date
          excerpt
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
    }
  `;

  const data = (await getWordPressData(
    query,
    {
      categorySlug,
      limit,
      field: orderBy,
      order,
    },
    {
      revalidate: DEFAULT_LIBRARY_REVALIDATE,
      tags: ["library-posts", `library-posts:${categorySlug}`],
    },
  )) as GetLibraryPostsResponse | undefined;

  return (data?.posts?.nodes ?? [])
    .map((post) => normalizeLibraryEntry(post, categorySlug))
    .filter((entry): entry is LibraryEntry => entry !== null);
}
