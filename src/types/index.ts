export interface PublicApiCategoriesResponse {
  count: number;
  categories: String[];
}

export interface PublicApiResponse {
  API: String;
  Description: String;
  Auth: string;
  HTTPS: boolean;
  Cors: String;
  Link: String;
  Category: String;
}

export interface PublicApiEntriesResponse {
  count: number;
  entries: PublicApiResponse[];
}
