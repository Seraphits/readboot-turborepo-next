const GET_DOC_BY_SLUG = `
  query GetDoc($id: ID!) {
    doc(id: $id, idType: URI) {
      title
      content
      documentationPages {
        notes
      }
    }
  }
`;

export async function getDocData(uri: string) {
  const res = await fetch(process.env.WORDPRESS_API_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: GET_DOC_BY_SLUG,
      variables: { id: uri },
    }),
  });
  const json = await res.json();
  return json.data.doc;
}
