export interface Order {
  _id: string;
  users_id: string;
  books_title: string;
  total_quantity: number;
  total_price: number;
  created_at: string;
  address: string;
  receiver: string;
  contact: string;
}
