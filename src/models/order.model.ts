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

export interface OrderSheet {
  items: string[];
  totalQuantity: number;
  totalPrice: number;
  firstBookTitle: string;
  delivery: Delivery;
}

export interface Delivery {
  address: string;
  receiver: string;
  contact: string;
}

export interface OrderDetail {
  author: string;
  books_id: string;
  orders_id: string;
  created_at: string;
  price: number;
  quantity: number;
  title: string;
}

export interface OrderList extends Order {
  detail?: OrderDetail[];
}
