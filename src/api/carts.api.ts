import { Cart } from "@/models/cart.model";
import { httpClient } from "@/api/http";

interface AddCartParams {
  books_id: string;
  quantity: number;
}

export const addCart = async (params: AddCartParams) => {
  const response = await httpClient.post("/carts", params);
  return response.data;
};

export const fetchCart = async () => {
  const response = await httpClient.get<Cart[]>("/carts");
  return response.data;
};

export const deleteCart = async (cartId: string) => {
  const response = await httpClient.delete(`/carts/${cartId}`);
  return response.data;
};
