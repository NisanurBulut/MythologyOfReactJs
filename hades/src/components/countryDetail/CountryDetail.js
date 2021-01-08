import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import './CountryDetail.css';
export default function CountryDetail(props) {
  return (
    <div className="countryDetail">
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
      <div className="cases-details">

        <div className="cases-box cases">
          <a href={props.totalCases}></a>
          <p className="yesterday">
            Last 24 Hours<br/> <strong>{props.newCases}</strong>
          </p>
        </div>

        <div className="cases-box deaths">
          <a href={props.totalDeaths}></a>
          <p className="yesterday">
            Last 24 Hours<br/> <strong>{props.newDeaths}</strong>
          </p>
        </div>

        <div className="cases-box recovered">
          <a href={props.Recovered}></a>
          <p className="yesterday">
            Last 24 Hours<br/> <strong>{props.newRecovered}</strong>
          </p>
        </div>

      </div>
    </div>
  );
}
