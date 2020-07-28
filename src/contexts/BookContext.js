import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const BookContext = createContext();

function BookContextProvider(props) {
  const [books, setBooks] = useState([
    { title: "Elon Musk", author: "Ashlee Vance", id: 1 },
    { title: "Deep Work", author: "Cal Newport", id: 2 },
    { title: "Ikigai", author: "Ionno Who", id: 3 },
    { title: "Principles", author: "Ray Dalio", id: 4 },
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { title: title, author: author, id: uuidv4() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;
