import { gql } from '@apollo/client';
import { getWordPressData } from './client';
import { PROJECT_FIELDS } from '../../queries/fragments/index'; // Fix the relative path if needed

export async function getProjectBySlug(slug: string) {
  const query = gql`
    query GetProjectBySlug($id: ID!, $idType: ProjectIdType!) {
      project(id: $id, idType: $idType) {
       ...ProjectFields
      }
    }
    ${PROJECT_FIELDS}
  `;

  const variables = { id: slug, idType: 'SLUG' };

  // 1. Await the raw response
  const data = await getWordPressData(query, variables);

  // 2. Return the nested project object (Fixes the empty page issue)
  return data?.project || null;
}
