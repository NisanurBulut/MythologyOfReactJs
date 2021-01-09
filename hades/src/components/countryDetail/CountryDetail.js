import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import NumberFormat from 'react-number-format';
import './CountryDetail.css';
export default function CountryDetail(props) {
  {console.log(props)}
  return (
    <div className="countryDetails">


      <div className="cases-details">
<div className="country-icon">
<ReactCountryFlag
          className="country-flag"
          countryCode={props.countryCode}
          svg
          style={{
            width: '3.5em',
            height: '3.5em',
          }}
          title={props.countryCode}
        />
</div>
        <div className="cases-box cases">
          <a href="#">
          <NumberFormat value={props.totalCases} thousandSeparator={true} displayType="text"/>
          </a>
          <p className="yesterday">
            Last 24 Hours <strong>
            <NumberFormat value={props.newCases} thousandSeparator={true} displayType="text"/>
              </strong>
          </p>
        </div>

        <div className="cases-box deaths">

          <a href="#">
          <NumberFormat value={props.totalDeaths} thousandSeparator={true} displayType="text"/>
          </a>
          <p className="yesterday">
            Last 24 Hours <strong> <NumberFormat value={props.newDeaths} thousandSeparator={true} displayType="text"/></strong>
          </p>
        </div>

        <div className="cases-box recovered">

          <a href="#">
          <NumberFormat value={props.totalRecovered} thousandSeparator={true} displayType="text"/>
          </a>
          <p className="yesterday">
            Last 24 Hours <strong>
            <NumberFormat value={props.newRecovered} thousandSeparator={true} displayType="text"/></strong>
          </p>
        </div>

      </div>
    </div>
  );
}
