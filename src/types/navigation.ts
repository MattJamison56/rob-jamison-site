export interface MenuItem {
  label: string;
  path: string;
  subItems?: MenuItem[];
  external?: boolean;
}

export interface SearchResult {
  title: string;
  path: string;
  description?: string;
}
