import { requestHandler } from "@/api/http";
import { BookReviewItem, BookReviewItemWrite } from "@/models/book.model";

export const fetchBookReview = async (bookId: string) => {
  return await requestHandler<BookReviewItem>("get", `/reviews/${bookId}`);
};

export const addBookReview = async (
  bookId: string,
  data: BookReviewItemWrite
) => {
  return await requestHandler("post", `/reviews/${bookId}`, data);
};
