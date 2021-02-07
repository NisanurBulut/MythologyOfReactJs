import React, { useContext } from 'react';
import classes from '../../containers/AppContextApi/AppContextApi.css';
import { BookContext } from '../../containers/AppContextApi/contexts/BookContext';
import { ThemeContext } from '../../containers/AppContextApi/contexts/ThemeContext';

const BookList = () => {
  const { books } = useContext(BookContext);

  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className={classes.bookList}
      style={{ color: theme.style, background: theme.bg }}
    >
      <ul>
        {books.map((book) => {
          return <li key={book.id} style={{ background: theme.ui }}>
            {book.title}
          </li>;
        })}
      </ul>
    </div>
  );
};

export default BookList;
