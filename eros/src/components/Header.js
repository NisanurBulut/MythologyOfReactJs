import React, { Component } from 'react'
import PropTypes from 'prop-types';

const Header =({title})=> {
        return (
            <div>
                <h1>{title}</h1>
            </div>
        )
    }
Header.defaultProps = {
    title:'Love Tracker'
}

Header.PropTypes={
    title:PropTypes.string
}
export default Header;