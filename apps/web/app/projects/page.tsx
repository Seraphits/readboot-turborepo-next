import { getAllProjects } from '@repo/wp-utils';
import { Hero } from '@repo/ui/organisms';
import { Showcase } from '@repo/ui/organisms';
import { ShowcaseTemplate } from '@repo/ui/templates';

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <ShowcaseTemplate
      headerSlot={
        <Hero
          title="Portfolio Projects"
          subhead="Live Engineering Lab: architected in public using Next.js Turborepo."
        />
      }
      mainSlot={
        <Showcase
          items={projects}
          type="project"
        />
      }
    />
  );
}
