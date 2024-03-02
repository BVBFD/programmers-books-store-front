import { useEffect, useState } from "react";
import { fetchCategory } from "@/api/category.api";
import { Category } from "@/models/category.model";
import { useLocation } from "react-router-dom";

export const useCategory = () => {
  const location = useLocation();
  const [categories, setCategories] = useState<Category[]>([]);

  const setActive = () => {
    const params = new URLSearchParams(location.search);

    if (params.get("categoryId")) {
      setCategories((prev) => {
        return prev.map((item) => {
          return {
            ...item,
            isActive: item.category_id === params.get("categoryId"),
          };
        });
      });
    } else {
      setCategories((prev) => {
        return prev.map((item) => {
          return {
            ...item,
            isActive: false,
          };
        });
      });
    }
  };

  useEffect(() => {
    fetchCategory().then((categories) => {
      if (!categories) return;

      const categoryWithAll = [
        {
          category_id: null,
          category: "전체",
          updated_at: `${new Date().toLocaleDateString()}`,
          created_at: `${new Date().toLocaleDateString()}`,
        },
        ...categories,
      ];

      setCategories(categoryWithAll);
      setActive();
    });
  }, []);

  useEffect(() => {
    setActive();
  }, [location.search]);

  return { categories };
};
