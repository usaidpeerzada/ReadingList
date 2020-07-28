import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

function Navbar() {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Usaid's Reading List</h1>
      <p>Currently you have {books.length} books to get through.... </p>
    </div>
  );
}

export default Navbar;
