// apps/web/app/projects/page.tsx
import Link from 'next/link';
import { getAllProjects } from '@repo/wp-utils';
import { Project } from '@repo/wp-utils/src/types';

export default async function ProjectsPage() {
  let projects: Project[] = [];
  try {
    projects = await getAllProjects();
  } catch (err) {
    console.error('Failed to load projects:', err);
    // Fall through to render empty state
  }

  return (
    <main>
      <h1>Portfolio Projects</h1>

      <div>
        {projects.map((project: Project) => (
          <article key={project.id}>
            <header>
              {/* Pulling status from Project Intelligence ACF */}
              <span>{project.projectIntelligence.lifecycleStatus}</span>
              <h3>{project.title}</h3>
            </header>

            {/* Project description from the native Excerpt field */}
            <div dangerouslySetInnerHTML={{ __html: project.excerpt || '' }} />

            <footer>
              {/* Impact metric from Project Intelligence ACF */}
              <span>{project.projectIntelligence.impactMetric}</span>

              <div>
                {project.tags.nodes.map((tag) => (
                  <span key={tag.name}>{tag.name}</span>
                ))}
              </div>
            </footer>

            <Link href={`/projects/${project.slug}`}>
              View Case Study
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
