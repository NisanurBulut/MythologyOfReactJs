import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Yerdeniz Büyücüsü', author: 'Ursula K Le Guin' },
    { id: 2, title: 'Satranç', author: 'Stefan Zweig' },
    { id: 3, title: 'Şeker Portakalı', author: 'José Mauro de Vasconcelos' },
    { id: 4, title: 'Çalıkuşu', author: 'Reşat Nuri Güntekin' },
    { id: 5, title: 'Kürk Mantolu Madonna', author: 'Sabahattin Ali' },
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
