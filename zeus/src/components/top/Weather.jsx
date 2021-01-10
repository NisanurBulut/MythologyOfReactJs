import React, { Component } from 'react'

export default class Weather extends Component {
    constructor(props)
    {
        super(props);
        this.state={}
    }
    render() {
        return (
            <div className="weather-container">
                <div className="header">Place Name</div>
                <div className="inner-contaniner">
                    <div className="imgage">Image</div>
                    <div className="current-weather">10</div>
                </div>
                <div className="footer-container">Sunny</div>
            </div>
        )
    }
}
