import { useEffect, useState } from "react";
import { fetchCategory } from "../api/category.api";
import { Category } from "../models/category.model";

export const useCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);

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
    });
  }, []);

  return { categories };
};
