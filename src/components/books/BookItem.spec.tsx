import { render } from "@testing-library/react";
import BookItem from "./BookItem";
import { ThemeContextProvider } from "../../context/themeContext";
import { Book } from "../../models/book.model";
import { formatNumber } from "../../utils/format";
import { getImgSrc } from "../../utils/image";

const dummyBook: Book = {
  _id: "13a61ae0-2ffd-4a71-8929-0adfa3c2a812",
  title: "해리포터",
  form: "종이책",
  isbn: "13",
  img: "https://img.woodo.kr/book/thumbnail/8/9788983927668.jpg",
  summary: "해리포터 이야기..",
  detail: "해리포터와 볼드모트 이야기 그리고 덤블도어..",
  author: "김해리",
  pages: 340,
  contents: "해리포터 목차임",
  price: 40000,
  likes: 2,
  categoryId: "5f7cb258-d549-4f8b-8499-649b7e7f623b",
  pubDate: "2024-01-01",
  updatedAt: "2024-01-04 13:16:44",
  createdAt: "2024-01-04 13:12:42",
};

describe("BookItem", () => {
  it("렌더 여부", () => {
    const { getByText, getByAltText } = render(
      <ThemeContextProvider>
        <BookItem key={dummyBook._id} book={dummyBook} view="list" />
      </ThemeContextProvider>
    );

    expect(getByText(dummyBook.title)).toBeInTheDocument();
    expect(getByText(dummyBook.summary)).toBeInTheDocument();
    expect(getByText(dummyBook.author)).toBeInTheDocument();
    expect(getByText(`${formatNumber(dummyBook.price)}원`)).toBeInTheDocument();
    expect(getByText(dummyBook.likes)).toBeInTheDocument();
    expect(getByAltText(dummyBook.title)).toHaveAttribute(
      "src",
      `${getImgSrc(parseInt(dummyBook.isbn))}`
    );
  });
});
