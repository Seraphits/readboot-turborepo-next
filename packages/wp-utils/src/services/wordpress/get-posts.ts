import { gql } from '@apollo/client';
import { getWordPressData } from './client';
import { POST_FIELDS } from '../../queries/fragments/post-fields';

export async function getPosts(params: {
  categorySlug?: string;
  limit?: number;
  orderBy?: 'DATE' | 'TITLE' | 'NAME';
  order?: 'ASC' | 'DESC';
}) {
  const { categorySlug, limit = 3, orderBy = 'DATE', order = 'DESC' } = params;

  const query = gql`
    query GetPosts($categoryName: String, $limit: Int!, $field: PostObjectsConnectionOrderbyEnum!, $order: OrderEnum!) {
      posts(where: { categoryName: $categoryName, orderby: { field: $field, order: $order } }, first: $limit) {
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
    order
  };

  const data = await getWordPressData(query, variables);
  return data?.posts?.nodes || [];
}
