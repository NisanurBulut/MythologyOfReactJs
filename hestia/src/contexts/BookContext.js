import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { id: 1, title: '', author: '' },
    { id: 2, title: '', author: '' },
    { id: 3, title: '', author: '' },
    { id: 4, title: '', author: '' },
    { id: 5, title: '', author: '' },
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { title: title, author: author, id: uuidv4() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((a) => a.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};
export default BookContextProvider;
