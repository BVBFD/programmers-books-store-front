import BooksEmpty from "@/components/books/BooksEmpty";
import BooksFilter from "@/components/books/BooksFilter";
import BooksList from "@/components/books/BooksList";
import BooksViewSwitcher from "@/components/books/BooksViewSwitcher";
import Title from "@/components/common/Title";
import styled from "styled-components";
import Loading from "@/components/common/Loading";
import { useBooksInfinite } from "@/hooks/useBooksInfinite";
import Button from "@/components/common/Button";
import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Books = () => {
  const {
    books,
    pagination,
    isEmpty,
    isBooksLoading,
    fetchNextPage,
    hasNextPage,
  } = useBooksInfinite();

  const loadMore = () => {
    if (!hasNextPage) return;
    fetchNextPage();
  };
  // const moreRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     // entries로 감시대상 매개변수로 불러와서 intersectionobjserver 속성 결합.
  //     // 복수인 이유는 감시대상을 여러개 설정하여, 개별적인 콜백함수를 등록할 수 있음.
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         loadMore();
  //         observer.unobserve(entry.target);
  //       }
  //     });
  //   });

  //   if (moreRef.current) {
  //     // 감시대상 설정
  //     observer.observe(moreRef.current);
  //   }

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, [books, moreRef]);

  const moreRef = useIntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      loadMore();
    }
  });

  if (isEmpty) return <BooksEmpty />;

  if (!books || !pagination || isBooksLoading) return <Loading />;

  return (
    <>
      <Title size="large">도서 검색 결과</Title>
      <BooksStyle>
        <div className="filter">
          <BooksFilter />
          <BooksViewSwitcher />
        </div>
        <BooksList books={books} />
        {/* <Pagination pagination={pagination} /> */}

        <div className="more" ref={moreRef}>
          <Button
            size="medium"
            schema="normal"
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage}
          >
            {hasNextPage ? "더보기" : "마지막 페이지"}
          </Button>
        </div>
      </BooksStyle>
    </>
  );
};

const BooksStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
`;

export default Books;
