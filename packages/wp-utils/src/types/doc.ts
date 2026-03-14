/**
 * Type definitions for WordPress doc (documentation) data.
 */
export interface DocData {
  title: string;
  content: string;
  documentationPages?: {
    notes?: string;
  };
}
