import { useEffect, useState } from "react";
import { Book } from "../models/book.model";
import { fetchBook, likeBook, unlikeBook } from "../api/books.api";
import { useAuthStore } from "../store/authStore";
import { useAlert } from "./useAlert";

export const useBook = (bookId: string) => {
  const [book, setBook] = useState<Book[]>([]);
  const { isloggedIn } = useAuthStore();
  const showAlert = useAlert();

  const likeToggle = () => {
    if (!isloggedIn) {
      showAlert("로그인이 필요합니다.");
      return;
    }

    if (!book[0]) return;

    if (book[0].liked) {
      // like 상태 -> unlike 실행
      unlikeBook(book[0]._id).then(() => {
        setBook([
          {
            ...book[0],
            liked: (book[0].liked as number) - 1,
            likes: book[0].likes - 1,
          },
        ]);
      });
    } else {
      // unlike 상태 -> like 실행
      likeBook(book[0]._id).then(() => {
        // 성공 처리
        setBook([
          {
            ...book[0],
            liked: (book[0].liked as number) + 1,
            likes: book[0].likes + 1,
          },
        ]);
      });
    }
  };

  useEffect(() => {
    fetchBook(bookId).then((book) => setBook(book as unknown as Book[]));
  }, [bookId]);

  console.log(book);

  return { book: book[0], likeToggle };
};
