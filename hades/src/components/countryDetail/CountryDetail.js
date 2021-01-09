import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import NumberFormat from 'react-number-format';
import './CountryDetail.css';
export default function CountryDetail(props) {
  const changeNumberFormat = function (value) {
    return (
      <NumberFormat value={value} thousandSeparator={true} displayType="text" />
    );
  };
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
           {changeNumberFormat(props.totalCases)}
          </a>
          <p className="yesterday">
            Last 24 Hours{' '}
            <strong>
            {changeNumberFormat(props.newCases)}
            </strong>
          </p>
        </div>

        <div className="cases-box deaths">
          <a href="#">
          {changeNumberFormat(props.totalDeaths)}
          </a>
          <p className="yesterday">
            Last 24 Hours{' '}
            <strong>
            {changeNumberFormat(props.newDeaths)}
            </strong>
          </p>
        </div>

        <div className="cases-box recovered">
          <a href="#">
          {changeNumberFormat(props.totalRecovered)}
          </a>
          <p className="yesterday">
            Last 24 Hours{' '}
            <strong>
            {changeNumberFormat(props.newRecovered)}
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}
