import { gql } from '@apollo/client';
import { Project } from '../../types';
import { PROJECT_FIELDS } from '../../queries/fragments';
import { getWordPressData } from './client';

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const query = gql`
    query GetProjectBySlug($id: ID!) {
      project(id: $id, idType: SLUG) {
        ...ProjectFields
      }
    }
    ${PROJECT_FIELDS}
  `;

  const data = await getWordPressData(query, { id: slug });
  return data?.project || null;
}
