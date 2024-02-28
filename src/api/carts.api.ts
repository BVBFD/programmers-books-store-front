import { httpClient } from "./http";

interface AddCartParams {
  books_id: string;
  quantity: number;
}

export const addCart = async (params: AddCartParams) => {
  const response = await httpClient.post("/carts", params);
  return response.data;
};
