import { requestHandler } from "@/api/http";
import { BookReviewItem } from "@/models/book.model";

export const fetchBookReview = async (bookId: string) => {
  return await requestHandler<BookReviewItem>("get", `/reviews/${bookId}`);
};
