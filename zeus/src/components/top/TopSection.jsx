import React, { Component } from 'react'
import './TopSection.scss';
import Weather from './Weather';
export default class TopSection extends Component {
    constructor(props)
    {
        super(props);
        this.state={}
    }
    render() {
        return (
            <div className="top-container">
                <div className="title">Zeus</div>
                <Weather/>
            </div>
        )
    }
}
