import { SectionLayout } from '../LayoutAtoms/SectionLayout';
import { GridArea } from '../LayoutAtoms/GridArea';
import { GlitchHeader } from '../Molecules/GlitchHeader';
import { CaptureForm } from '../Molecules/CaptureForm';
import { MediaMockup } from '../Molecules/MediaMockup';
import { Button } from '../Atoms/Button/button';
import styles from './Hero.module.scss';

export const Hero = ({ layout = 'centered', title, subhead, ctaText, imageNode }) => {
  return (
    <SectionLayout variant={layout}>
      <GridArea area="content">
        <GlitchHeader title={title} subhead={subhead} />

        {layout === 'inputCapture'? (
          <CaptureForm ctaText={ctaText} />
        ) : (
          <Button className={styles.bouncyCta}>{ctaText}</Button>
        )}
      </GridArea>

      {layout!== 'centered' && (
        <GridArea area="media">
          {layout === 'productPreview'? (
            <MediaMockup>{imageNode}</MediaMockup>
          ) : (
            imageNode
          )}
        </GridArea>
      )}
    </SectionLayout>
  );
};
