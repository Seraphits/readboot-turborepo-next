import React from 'react';

interface EditorBlock {
  name?: string;
  renderedHtml?: string;
}

interface WPContentProps {
  data: {
    title: string;
    content?: string;
    editorBlocks?: EditorBlock[] | null;
  } | null;
}

export const WPContent = ({ data }: WPContentProps) => {
  if (!data) return <p>No content found.</p>;

  return (
    <section className="wp-content-block">
      <h1>{data.title}</h1>

      {data.editorBlocks?.length ? (
        <div className="wp-blocks">
          {data.editorBlocks
            .filter((block) => block.renderedHtml)
            .map((block, i) => (
              <div
                key={i}
                className={`wp-block wp-block-${block.name || 'unknown'}`}
                dangerouslySetInnerHTML={{ __html: block.renderedHtml! }}
              />
            ))}
        </div>
      ) : (
        data.content && (
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        )
      )}
    </section>
  );
};
