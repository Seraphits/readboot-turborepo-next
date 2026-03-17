import { gql } from '@apollo/client';

const CORE_PAGE_FIELDS = gql`
  fragment CorePageFields on Page {
    title
    content
    editorBlocks {
      name
      renderedHtml
    }
  }
`;
