import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useBook } from "@/hooks/useBook";
import { getImgSrc } from "@/utils/image";
import Title from "@/components/common/Title";
import { Book } from "@/models/book.model";
import { formatDate, formatNumber } from "@/utils/format";
import { Link } from "react-router-dom";
import EllipsisBox from "@/components/common/EllipsisBox";
import LikeButton from "@/components/book/LikeButton";
import AddToCart from "@/components/book/AddToCart";
import BookReview from "@/components/book/BookReview";

const bookInfoList = [
  {
    label: "카테고리",
    key: "category",
    filter: (book: Book) => (
      <Link to={`/books?categoryId=${book.categoryId}`}>{book.category}</Link>
    ),
  },
  {
    label: "포맷",
    key: "form",
  },
  {
    label: "페이지",
    key: "pages",
  },
  {
    label: "ISBN",
    key: "isbn",
  },
  {
    label: "출간일",
    key: "pubDate",
    filter: (book: Book) => {
      return formatDate(book.pubDate);
    },
  },
  {
    label: "가격",
    key: "price",
    filter: (book: Book) => {
      return `${formatNumber(book.price)} 원`;
    },
  },
];

const BookDetail = () => {
  const { bookId } = useParams();
  const { book, likeToggle, reviews, addReview } = useBook(`${bookId}`);

  if (!book) return null;

  return (
    <BookDetailStyle>
      <header className="header">
        <div className="img">
          <img src={getImgSrc(parseInt(book.isbn))} alt={book.title} />
        </div>
        <div className="info">
          <Title size="large" color="text">
            {book.title}
          </Title>
          {bookInfoList.map((item) => (
            <dl>
              <dt>{item.label}</dt>
              <dd>
                {item.filter ? item.filter(book) : book[item.key as keyof Book]}
              </dd>
            </dl>
          ))}
          <p className="summary">{book.summary}</p>

          <div className="like">
            <LikeButton book={book} onClick={likeToggle} />
          </div>
          <div className="add-cart">
            <AddToCart book={book} />
          </div>
        </div>
      </header>
      <div className="content">
        <Title size="medium">상세설명</Title>
        <EllipsisBox linelimit={4}>{book.detail}</EllipsisBox>

        <Title size="medium">목차</Title>
        <p className="index">{book.contents}</p>

        <Title size="medium">리뷰</Title>
        <BookReview reviews={reviews} onAdd={addReview} />
      </div>
    </BookDetailStyle>
  );
};

const BookDetailStyle = styled.div`
  .header {
    display: flex;
    align-items: start;
    gap: 24px;
    padding: 0 0 24px 0;

    .img {
      flex: 1;

      img {
        width: 100%;
        height: auto;
      }
    }

    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 12px;

      dl {
        display: flex;
        margin: 0;

        dt {
          width: 80px;
          color: ${({ theme }) => theme.color.secondary};
        }

        a {
          color: ${({ theme }) => theme.color.primary};
        }
      }
    }
  }

  .content {
  }
`;

export default BookDetail;
