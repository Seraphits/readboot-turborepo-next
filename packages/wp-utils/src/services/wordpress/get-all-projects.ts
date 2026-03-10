// packages/wp-utils/src/services/wordpress/get-all-projects.ts
import { Project } from '../../types';
import { PROJECT_FIELDS } from '../../queries/fragments';
import { getWordPressData } from './client';

export async function getAllProjects(): Promise<Project[]> {
  const query = `
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
