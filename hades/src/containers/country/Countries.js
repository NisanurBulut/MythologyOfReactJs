import React, { Component } from 'react'
import './Countries.css';
import HeadingNames from '../../components/headingNames/HeadingNames';
export default class Countries extends Component {
    render() {
        return (
            <div className="countries-stats">
                <h2 className="countries-stats-heading">Countries Stats</h2>
                <div className="filtering">
                    <input type="text" placeholder="enter country name"/>
                    <select name="" id="" className="sort-by">
                        <option>Highest</option>
                        <option>Lowest</option>
                    </select>
                </div>
               <HeadingNames/>
            </div>
        )
    }
}
