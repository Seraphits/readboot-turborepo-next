// 1. Add the missing import (Fixes Image 9 ReferenceError)
import { getProjectBySlug } from '@repo/wp-utils';
import { notFound } from 'next/navigation';

// apps/web/app/projects/[slug]/page.tsx

interface ProjectPageProps {
  // slug is back to being a single string
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="project-detail-container">
      {/* 1. Project Title */}
      <h1>{project.title}</h1>

      {/* 2. Project Intelligence (ACF Fields from Image 6) */}
      <section className="project-intelligence">
        {project.projectIntelligence && (
          <ul>
            <li><strong>Status:</strong> {project.projectIntelligence.lifecycleStatus}</li>
            {/* Note: Use 'impactMetric' as defined by your fragment alias */}
            <li><strong>Metric:</strong> {project.projectIntelligence.impactMetric}</li>
            <li><strong>Link:</strong> {project.projectIntelligence.liveProjectLink}</li>
          </ul>
        )}
      </section>

      {/* 3. Main Project Content (from Image 7) */}
      <section
        className="project-content"
        dangerouslySetInnerHTML={{ __html: project.content }}
      />
    </main>
  );
}
