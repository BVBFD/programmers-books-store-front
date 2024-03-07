import { requestHandler } from "@/api/http";

interface FetchBooksParams {
  categoryId?: string;
  limit: number;
  currentPage?: number;
  news?: boolean;
}

export const fetchBooks = async (params: FetchBooksParams) => {
  try {
    return await requestHandler("get", "/books", { params });
  } catch (error) {
    return {
      books: [],
      pagination: {
        totalBooksCount: 0,
        currentPage: 1,
      },
    };
  }
};

export const fetchBook = async (bookId: string) => {
  return await requestHandler("get", `/books/${bookId}`);
};

export const likeBook = async (bookId: string) => {
  return await requestHandler("post", `/likes/${bookId}`);
};

export const unlikeBook = async (bookId: string) => {
  return await requestHandler("delete", `/likes/${bookId}`);
};

export const fetchBestBooks = async () => {
  return await requestHandler("get", `/books/best`);
};
