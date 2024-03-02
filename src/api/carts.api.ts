import { httpClient, requestHandler } from "@/api/http";

interface AddCartParams {
  books_id: string;
  quantity: number;
}

export const addCart = async (params: AddCartParams) => {
  return await requestHandler("post", "/carts", params);
};

export const fetchCart = async () => {
  return await requestHandler("get", "/carts");
};

export const deleteCart = async (cartId: string) => {
  return await requestHandler("delete", `/carts/${cartId}`);
};
