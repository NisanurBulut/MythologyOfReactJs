import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books,setBooks] = useState([
        {title:'A', id:1},
        {title:'S', id:2},
        {title:'D', id:3},
        {title:'C', id:4}
    ]);
    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
     );
}

export default BookContextProvider;