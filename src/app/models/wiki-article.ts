export interface WikiArticle {
  title: string;
  extract: string;
  content_urls?: {
    desktop: {
      page: string;
    }
  }
}

export interface WikiResponse {
  pages: WikiArticle[];
}