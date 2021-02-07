import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleBook = (e) => {
    e.preventDefault();

    addBook(title, author)
    setTitle('');
    setAuthor('');
  };
  return (
    <form onSubmit={handleBook}>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        value={author}
        placeholder="Author"
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default BookForm;
