import { gql } from "@apollo/client";
import { getWordPressData } from "./client";
import { POST_FIELDS } from "../../queries/fragments/post-fields";
import type { Post } from "../../types";

export async function getPosts(params: {
  categorySlug?: string;
  limit?: number;
  orderBy?: "DATE" | "TITLE" | "NAME";
  order?: "ASC" | "DESC";
  /** Global post ID to exclude (e.g. current post in sidebar). Passed to WPGraphQL `where.notIn` when supported; otherwise filtered client-side. */
  excludePostId?: string;
}): Promise<Post[]> {
  const {
    categorySlug,
    limit = 3,
    orderBy = "DATE",
    order = "DESC",
    excludePostId,
  } = params;

  const query = gql`
    query GetPosts(
      $categoryName: String
      $limit: Int!
      $field: PostObjectsConnectionOrderbyEnum!
      $order: OrderEnum!
      $notIn: [ID]
    ) {
      posts(
        where: {
          categoryName: $categoryName
          notIn: $notIn
          orderby: { field: $field, order: $order }
        }
        first: $limit
      ) {
        nodes {
          ...PostFields
        }
      }
    }
    ${POST_FIELDS}
  `;

  const variables = {
    categoryName: categorySlug || null,
    limit,
    field: orderBy,
    order,
    notIn: excludePostId ? [excludePostId] : null,
  };

  let data: { posts?: { nodes: Post[] } } | null = null;
  try {
    data = await getWordPressData(query, variables);
  } catch {
    // Some WPGraphQL versions omit `notIn` on PostWhereArgs — fall back without exclusion in query.
    const fallbackQuery = gql`
      query GetPostsFallback(
        $categoryName: String
        $limit: Int!
        $field: PostObjectsConnectionOrderbyEnum!
        $order: OrderEnum!
      ) {
        posts(
          where: {
            categoryName: $categoryName
            orderby: { field: $field, order: $order }
          }
          first: $limit
        ) {
          nodes {
            ...PostFields
          }
        }
      }
      ${POST_FIELDS}
    `;
    const fetchLimit = excludePostId ? Math.min(limit + 5, 50) : limit;
    data = await getWordPressData(fallbackQuery, {
      categoryName: categorySlug || null,
      limit: fetchLimit,
      field: orderBy,
      order,
    });
  }

  let nodes: Post[] = data?.posts?.nodes || [];
  if (excludePostId) {
    nodes = nodes.filter((p) => p.id !== excludePostId);
  }
  return nodes.slice(0, limit);
}
