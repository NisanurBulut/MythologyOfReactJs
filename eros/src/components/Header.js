import React, { Component } from 'react'

const Header =(props)=> {
        return (
            <div>
                <h1>{props.title}</h1>
            </div>
        )
    }
Header.defaultProps = {
    title:'Love Tracker'
}
export default Header;