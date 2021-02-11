import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Button from './Button';

const Header =({title})=> {
    const onClick=()=>{
        console.log('in Header component clicked');
    }
        return (
            <div className='header'>
                <h1>{title}</h1>
                <Button color='green' text='Add' onClick={onClick} />
            </div>
        )
    }
Header.defaultProps = {
    title:'Love Tracker'
}

Header.prototype={
    title:PropTypes.string.isRequired
}
// const headerStyle= {
//    color:'red',
//    backgroundColor:'black'
// }
export default Header;