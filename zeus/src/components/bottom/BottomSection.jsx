import React, { Component } from 'react'
import './BottomSection.scss';

export default class BottomSection extends Component {

    constructor(props)
    {
        super(props);
        this.state={}
    }
    render() {
        const {bottomImage}=this.props;

        const divStyle = {
            background: `url(${bottomImage}) center no-repeat`
        }

          return(<div className="bottom-container" style={divStyle}></div>)
    }
}
