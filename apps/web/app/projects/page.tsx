import { getAllProjects } from '@repo/wp-utils';
import { BoxedFeatureHero } from '@repo/ui/organisms';
import { Showcase } from '@repo/ui/organisms';
import { ShowcaseTemplate } from '@repo/ui/templates';

/** WordPress fetch at build time can time out on Vercel (ETIMEDOUT); render on demand like /blog. */
export const dynamic = 'force-dynamic';

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <ShowcaseTemplate
      headerSlot={
        <BoxedFeatureHero
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
