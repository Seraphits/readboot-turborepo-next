import { BlogGrid } from '@repo/ui/patterns/Organisms/BlogGrid/BlogGrid';
import { getProjectBySlug } from '@repo/wp-utils';
import { notFound } from 'next/navigation';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const linkedCategory = project.projectIntelligence?.linkedBlogCategory?.slug;

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
        <BlogGrid
          categorySlug={linkedCategory}
          limit={3}
          orderBy="DATE"
          sectionTitle="Related Insights"
        />
      </section>

      {/* 3. Main Project Content (from Image 7) */}
      <section
        className="project-content"
        dangerouslySetInnerHTML={{ __html: project.content }}
      />
    </main>
  );
}
