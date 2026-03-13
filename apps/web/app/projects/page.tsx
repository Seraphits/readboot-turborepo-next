import Link from 'next/link';
import { getAllProjects } from '@repo/wp-utils';
import { Project } from '@repo/wp-utils/src/types';

export default async function ProjectsPage() {
  let projects: Project[] = [];

  try {
    projects = await getAllProjects();
  } catch (err) {
    console.error('Failed to load projects:', err);
  }

  return (
    <main className="projects-list-container">
      <h1>Portfolio Projects</h1>

      <div className="projects-grid">
        {projects.map((project: Project) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="project-card-link"
          >
            <article className="project-card">
              <header>
                {/* Status Badge */}
                <span className="status-badge">
                  {project.projectIntelligence.lifecycleStatus}
                </span>
                <h3>{project.title}</h3>
              </header>

              {/* Excerpt/Description */}
              <div
                className="project-description"
                dangerouslySetInnerHTML={{ __html: project.excerpt || '' }}
              />

              {/* Metrics and Tags */}
              <div className="project-meta">
                <span className="impact-metric">
                  {project.projectIntelligence.impactMetric}
                </span>

                <div className="tag-list">
                  {project.tags.nodes.map((tag) => (
                    <span key={tag.name} className="tag">
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>

              <span className="cta-text">View Case Study →</span>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
