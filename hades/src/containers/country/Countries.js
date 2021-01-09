import React, { Component } from 'react'
import axios from 'axios';
import './Countries.css';
import HeadingNames from '../../components/headingNames/HeadingNames';
import CountryDetail  from '../../components/countryDetail/CountryDetail';

export default class Countries extends Component {
    state ={
        countryDetails:[],
        searchedCountries:[]
    }
    async componentDidMount(){
        const dataCovid =await axios.get('https://api.covid19api.com/summary');
        let countryDetails = dataCovid.data.Countries;
        this.setState({
            countryDetails:countryDetails,
            status:true,
            selectedData:countryDetails
        })
    }
    render() {
        const countryList = this.state.countryDetails.length>0?
        this.state.selectedData.map((curr,index)=>{
            return    ( <CountryDetail
                key={index}
                countryCode={curr.CountryCode}
                totalCases={curr.TotalConfirmed}
                newCases={curr.NewConfirmed}
                totalDeaths={curr.TotalDeaths}
                newDeaths={curr.NewDeaths}
                totalRecovered={curr.TotalRecovered}
                newRecovered={curr.NewDeaths} />)
        }): null;
        return (
            <div className="countries-stats">
                <h2 className="countries-stats-heading">Countries Stats</h2>
                <div className="filtering">
                    <input type="text" placeholder="enter country name"/>
                    <select className="sort-by">
                        <option>Highest</option>
                        <option>Lowest</option>
                    </select>
                </div>
               <HeadingNames/>
               {countryList}
            </div>
        )
    }
}
