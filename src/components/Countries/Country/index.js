import React from "react";
import "./style.scss";

const Country = ({ country }) => {
  return (
    <div className="country__wrapper">
      <div className="country">
        <div
          className="country__flag"
          style={{ backgroundImage: `url(${country.flag})` }}
        ></div>
        <div className="country__desc">
          <h3 className="country__name">{country.name}</h3>
          <p className="country__desc--field">
            <span className="country__desc--title">Population: </span>
            {country.population}
          </p>
          <p className="country__desc--field">
            <span className="country__desc--title">Region: </span>
            {country.region}
          </p>
          <p className="country__desc--field">
            <span className="country__desc--title">Capital: </span>
            {country.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Country;
