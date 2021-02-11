import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Button from './Button';

const Header =({title})=> {
        return (
            <div className='header'>
                <h1>{title}</h1>
                <Button color='green' text='Add' />
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