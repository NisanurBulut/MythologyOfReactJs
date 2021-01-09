import React, { Component } from 'react';
import axios from 'axios';
import ArraySort from 'array-sort';
import './Countries.css';
import HeadingNames from '../../components/headingNames/HeadingNames';
import CountryDetail from '../../components/countryDetail/CountryDetail';
import Spinner from '../../components/spinner/Spinner';

export default class Countries extends Component {
  state = {
    countryDetails: [],
    searchedCountries: [],
  };
  async componentDidMount() {
    const dataCovid = await axios.get('https://api.covid19api.com/summary');
    let countryDetails = dataCovid.data.Countries;
    countryDetails = ArraySort(countryDetails, 'TotalConfirmed', {
      reverse: true,
    });
    this.setState({
      countryDetails: countryDetails,
      status: true,
      selectedData: countryDetails,
    });
  }
  searchCountry = (e) => {
    const value = e.target.value;
    const countryDetails = this.state.countryDetails;
    let FindSpesificCountry = [];
    if (value) {
      countryDetails.map((curr, index) => {
        const finder = curr.Country.toLowerCase().search(value.toLowerCase());
        if (finder !== -1) {
          FindSpesificCountry.push(countryDetails[index]);
        }
      });
      FindSpesificCountry = ArraySort(FindSpesificCountry, 'TotalConfirmed', {
        reverse: true,
      });
      this.setState({ searchedCountries: FindSpesificCountry });
    } else {
      this.setState({ countryDetails: countryDetails });
    }
    if (value.length === 0) {
      this.setState({
        selectedData: this.state.countryDetails,
      });
    } else {
      this.setState({
        selectedData: this.state.searchedCountries,
      });
    }
  };
  changeSortValue = (e) => {
    const sortValue = e.target.value;
    let sortByReverse = true;
    if (sortValue === 'Highest') {
      sortByReverse = true;
    } else {
      sortByReverse = false;
    }
    let sortedCountryDetails = ArraySort(
      this.state.countryDetails,
      'TotalConfirmed',
      {
        reverse: sortByReverse,
      }
    );
    this.setState({
      countryDetails: sortedCountryDetails,
      status: true,
    });
  };
  render() {
    const countryList =
      this.state.countryDetails.length > 0
        ? this.state.selectedData.map((curr, index) => {
            return (
              <CountryDetail
                key={index}
                countryCode={curr.CountryCode}
                totalCases={curr.TotalConfirmed}
                newCases={curr.NewConfirmed}
                totalDeaths={curr.TotalDeaths}
                newDeaths={curr.NewDeaths}
                totalRecovered={curr.TotalRecovered}
                newRecovered={curr.NewDeaths}
              />
            );
          })
        : null;
    return (
      <div className="countries-stats">
        <h2 className="countries-stats-heading">Countries Stats</h2>
        <div className="filtering">
          <input
            type="text"
            placeholder="enter country name"
            onChange={this.searchCountry}
          />
          <select className="sort-by" onChange={this.changeSortValue}>
            <option>Highest</option>
            <option>Lowest</option>
          </select>
        </div>
        <HeadingNames />
        {this.state.countryDetails.length < 1 ? <Spinner /> : null}
        {countryList}
      </div>
    );
  }
}
