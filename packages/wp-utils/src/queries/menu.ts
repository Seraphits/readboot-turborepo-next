/**
 * GraphQL query for fetching menu items by location.
 * Supports WEB_TOPNAV, DOCS_TOPNAV, and other registered MenuLocationEnum values.
 */
export const GET_MENU_QUERY = `
  query GetMenuItems($location: MenuLocationEnum!) {
    menuItems(where: { location: $location }, first: 100) {
      nodes {
        id
        parentId
        label
        url
      }
    }
  }
`;
