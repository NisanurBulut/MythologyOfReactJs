import React,{ useContext } from 'react';
import BookContext from '../contexts/BookContext';

const Navbar = () => {
//    const {books} = useContext(BookContext); // destructing
console.log(useContext(BookContext));

    return (
    <div className="navbar">
        <h1>Hestia</h1>
        {/* <p>Currently you have {books.length} to get through</p> */}
    </div> );
}

export default Navbar;