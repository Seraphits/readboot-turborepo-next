import { Button } from "@repo/ui/atoms";
import { CodeExampleBlock } from '../components/CodeExampleBlock';
import { SectionIntro } from '../components/SectionIntro';
import styles from './page.module.scss';

export default function ComponentsPage() {
  return (
    <section>
      <SectionIntro
        headingLevel={1}
        title="Component Library"
        description={<>Interactive demos of shared components from the <code>@repo/ui</code> package.</>}
      />

      <SectionIntro
        title="Rebuild In Progress"
        description="The previous static Pattern Lab examples are being retired. This page will be rebuilt using WordPress-backed documentation content with Storybook-powered component previews."
      />

      <SectionIntro
        title="Button"
        description="Buttons trigger actions and come with a standard bounce effect on hover."
      />

      <div className={styles.buttonDemoRow}>
        <div className={styles.buttonDemoItem}>
          <p><small>Default State</small></p>
          <Button>Action Button</Button>
        </div>
        <div className={styles.buttonDemoItem}>
          <p><small>With Custom Content</small></p>
          <Button>Submit Order →</Button>
        </div>
      </div>

      <h3 className={styles.usageTitle}>Usage Example</h3>
      <CodeExampleBlock code={`import { Button } from "@repo/ui/atoms";\n\n<Button>Click Me</Button>`} />
    </section>
  );
}
