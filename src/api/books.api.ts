import { Book } from "../models/book.model";
import { Pagination } from "../models/pagination.model";
import { httpClient } from "./http";

interface FetchBooksParams {
  categoryId?: string;
  limit: number;
  currentPage?: number;
  news?: boolean;
}

interface FetchBooksResponse {
  books: Book[];
  pagination: Pagination;
}

export const fetchBooks = async (params: FetchBooksParams) => {
  try {
    const response = await httpClient.get<FetchBooksResponse>("/books", {
      params,
    });
    return response.data;
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
  const response = await httpClient.get<Book>(`/books/${bookId}`);
  return response.data;
};
