import React, { Component } from 'react'

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
export default Header;