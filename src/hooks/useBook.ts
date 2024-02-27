import { useEffect, useState } from "react";
import { Book } from "../models/book.model";
import { fetchBook } from "../api/books.api";

export const useBook = (bookId: string) => {
  const [book, setBook] = useState<Book[]>([]);

  useEffect(() => {
    fetchBook(bookId).then((book) => setBook(book as unknown as Book[]));
  }, [bookId]);

  return { book: book[0] };
};
