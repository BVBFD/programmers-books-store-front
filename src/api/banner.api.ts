import { requestHandler } from "@/api/http";
import { Banner } from "@/models/banner.model";

export const fetchBanners = async () => {
  return await requestHandler<Banner[]>("get", "/banners");
};
