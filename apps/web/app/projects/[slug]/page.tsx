import { getProjectBySlug, getAllProjects } from '@repo/wp-utils';
import { notFound } from 'next/navigation';

interface ProjectPageProps {
  params: { slug: string };
}

// 1. Static Params (SEO & Performance)
// This tells Next.js to pre-render these pages at build time
export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// 2. The Page Component
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="project-detail-container">
      <header>
        <h1>{project.title}</h1>
        <div className="intelligence-meta">
          <span>Status: {project.projectIntelligence.lifecycleStatus}</span>
          <span>Metric: {project.projectIntelligence.impactMetric}</span>
        </div>
      </header>

      <section
        className="project-content"
        dangerouslySetInnerHTML={{ __html: project.content }}
      />
    </main>
  );
}
