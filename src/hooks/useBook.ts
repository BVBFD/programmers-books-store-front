import { useEffect, useState } from "react";
import { Book } from "@/models/book.model";
import { fetchBook, likeBook, unlikeBook } from "@/api/books.api";
import { useAuthStore } from "@/store/authStore";
import { useAlert } from "@/hooks/useAlert";
import { addCart } from "@/api/carts.api";

export const useBook = (bookId: string) => {
  const [book, setBook] = useState<Book[]>([]);
  const { isloggedIn } = useAuthStore();
  const { showAlert } = useAlert();

  const [cartAdded, setCartAdded] = useState<boolean>(false);

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

  const addToCart = (quantity: number) => {
    addCart({
      books_id: book[0]._id,
      quantity,
    })
      .then(() => {
        setCartAdded(true);
        setTimeout(() => {
          setCartAdded(false);
        }, 3000);
      })
      .catch(() => {
        showAlert("로그인이 필요합니다.");
      });
  };

  useEffect(() => {
    fetchBook(bookId).then((book) => setBook(book as unknown as Book[]));
  }, [bookId]);

  return {
    book: book[0],
    cartAdded,
    likeToggle,
    addToCart,
  };
};
