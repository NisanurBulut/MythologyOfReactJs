import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books,setBooks] = useState([
        {title:'A', id:1},
        {title:'S', id:1},
        {title:'D', id:1},
        {title:'C', id:1}
    ]);
    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
     );
}

export default BookContextProvider;