import type { Meta, StoryObj } from "@storybook/react";
import { ContentArticle } from "./ContentArticle";
import { ContentArticleHeader } from "./ContentArticleHeader";
import { ContentFeaturedImage } from "./ContentFeaturedImage";

const meta: Meta<typeof ContentArticle> = {
  component: ContentArticle,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Article page shell: header slot, optional featured image slot, and main body region.",
      },
    },
  },
};
export default meta;

export const Composed: StoryObj<typeof ContentArticle> = {
  render: () => (
    <ContentArticle
      header={
        <ContentArticleHeader
          title="Composed article preview"
          excerpt="<p>Lead paragraph in the header slot.</p>"
          articleType={{ value: "brief", label: "Brief" }}
          theories={[{ value: "lab", label: "Lab note" }]}
        />
      }
      featuredImage={
        <ContentFeaturedImage
          image={{
            src: "/assets/storybook/pillar-placeholder.svg",
            alt: "Featured",
          }}
        />
      }
    >
      <p>Body column: first paragraph of long-form content.</p>
      <p>Second paragraph to show vertical rhythm.</p>
    </ContentArticle>
  ),
};

export const HeaderAndBodyOnly: StoryObj<typeof ContentArticle> = {
  render: () => (
    <ContentArticle
      header={
        <ContentArticleHeader title="Article without featured image" />
      }
    >
      <p>Body content only.</p>
    </ContentArticle>
  ),
};
