export interface AppNewsType {
  articles: AppNewsItemType[];
}
export interface AppNewsItemType {
  author: string;
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
