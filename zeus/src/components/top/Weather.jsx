import React, { Component } from 'react'
import iconURL from '../../images/sun.png'
export default class Weather extends Component {
    constructor(props)
    {
        super(props);
        this.state={}
    }
    render() {
        return (
            <div className="weather-container">
            <div className="header">Place</div>
            <div className="inner-container">
              <div className="image">
                <img src={iconURL} />
              </div>
              <div className="current-weather">10°</div>
            </div>
            <div className="footer">sunny</div>
          </div>
        )
    }
}
