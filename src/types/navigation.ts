export interface MenuItem {
  label: string;
  path: string;
  subItems?: MenuItem[];
}

export interface SearchResult {
  title: string;
  path: string;
  description?: string;
}
