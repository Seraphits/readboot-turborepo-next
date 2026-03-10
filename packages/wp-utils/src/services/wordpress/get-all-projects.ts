import { gql } from '@apollo/client';
import { Project } from '../../types';
import { PROJECT_FIELDS } from '../../queries/fragments'; // Import the new modular fragment
import { getWordPressData } from './client';

export async function getAllProjects(): Promise<Project[]> {
  const query = gql`
    query GetAllProjects {
      projects(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          ...ProjectFields
        }
      }
    }
    ${PROJECT_FIELDS}
  `;

  const data = await getWordPressData(query);
  return data?.projects?.nodes || [];
}
