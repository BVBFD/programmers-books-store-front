export interface Book {
  _id: string;
  title: string;
  category_id: string;
  form: string;
  isbn: string;
  img: string;
  summary: string;
  detail: string;
  author: string;
  pages: number;
  contents: string;
  price: number;
  pub_date: string;
  updated_at: string;
  created_at: string;
  category?: string;
  likes: number;
  liked?: number;
}
