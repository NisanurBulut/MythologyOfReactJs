import React, { Component } from 'react'
import iconURL from '../../images/sun.png'
export default class Weather extends Component {
    constructor(props)
    {
        super(props);
        this.state={}
    }
    render() {
      const {location,temp_c, isDay, text, iconURL} =this.props;
        return (
            <div className="weather-container">
            <div className="header">{location}</div>
            <div className="inner-container">
              <div className="image">
                <img src={iconURL} />
              </div>
              <div className="current-weather">{temp_c} °C</div>
            </div>
            <div className="footer">{text}</div>
          </div>
        )
    }
}
