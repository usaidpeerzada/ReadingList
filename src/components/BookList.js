import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ol>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ol>
    </div>
  ) : (
    <div className="empty">No Books To Read.</div>
  );
};

export default BookList;
