import { requestHandler } from "@/api/http";

export const fetchCategory = async () => {
  return await requestHandler("get", "/categories");
};
