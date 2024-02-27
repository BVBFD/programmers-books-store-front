export interface Book {
  _id: string;
  title: string;
  categoryId: string;
  form: string;
  isbn: string;
  img: string;
  summary: string;
  detail: string;
  author: string;
  pages: number;
  contents: string;
  price: number;
  pubDate: string;
  updatedAt: string;
  createdAt: string;
  category?: string;
  likes: number;
  liked?: number;
}
