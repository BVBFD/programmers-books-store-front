import { Category } from "@/models/category.model";
import { httpClient } from "@/api/http";

export const fetchCategory = async () => {
  const response = await httpClient.get<Category[]>("/categories");
  return response.data;
};
