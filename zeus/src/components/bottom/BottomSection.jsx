import React, { Component } from 'react'
import './BottomSection.scss';
import defaultBottomImage from '../../images/default.jpeg';
export default class BottomSection extends Component {
    constructor(props)
    {
        super(props);
        this.state={}
    }
    render() {
        const {bottomImage}=this.props;
        console.log("bottomImage",bottomImage);
        let imgUrl = defaultBottomImage || '';
        console.log("imgUrl",imgUrl);
        if(bottomImage)
        imgUrl = imgUrl.replace("default.jpeg", bottomImage);

        const divStyle = {
            background: `url(${imgUrl}) center no-repeat`
        }
        console.log(divStyle);
          return(<div className="bottom-container" style={divStyle}></div>)
    }
}
