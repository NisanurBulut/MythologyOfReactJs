import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext); // destructing

  return (
    <div className="navbar">
      <h1>HESTIA</h1>
      <p>Currently you have {books.length} to get through</p>
    </div>
  );
};

export default Navbar;
