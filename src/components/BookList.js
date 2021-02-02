import React from "react";
import { Book } from "./Book";

export const BookList = ({ books, changeBook, bookSelected }) => (
  <ul className="col-md-4">
    {books.map((book, index) => (
      <Book
        {...book}
        key={index}
        changeBook={changeBook}
        bookSelected={bookSelected}
      />
    ))}
  </ul>
);
