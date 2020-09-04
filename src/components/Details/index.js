import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Details = ({ country }) => {
  return (
    <main className="details">
      <div className="details__flag">
        <img src={country.flag} alt="country-flag" />
      </div>
      <div className="details__desc">
        <h1 className="details__header">{country.name}</h1>
        <div className="inner__wrapper">
          <div className="details__wrapper">
            <span className="field field--bold">
              Native Name:
              <span className="field">{country.nativeName}</span>
            </span>
            <span className="field field--bold">
              Population:<span className="field">{country.population}</span>
            </span>
            <span className="field field--bold">
              Region:<span className="field">{country.region}</span>
            </span>
            <span className="field field--bold">
              Sub Region:<span className="field">{country.subregion}</span>
            </span>
            <span className="field field--bold">
              Capital:<span className="field">{country.capital}</span>
            </span>
          </div>
          <div className="details__wrapper">
            <span className="field field--bold">
              Top Level Domain:
              <span className="field">{country.topLevelDomain}</span>
            </span>
            <span className="field field--bold">
              Currencies:
              <span className="field">
                {country.currencies &&
                  country.currencies.map((el, id) => (
                    <span className="field" key={id}>
                      {`${el.name}, `}
                    </span>
                  ))}
              </span>
            </span>
            <span className="field field--bold">
              Languages:
              <span className="field">
                {country.languages &&
                  country.languages.map((el, id) => (
                    <span className="field" key={id}>
                      {`${el.name}, `}
                    </span>
                  ))}
              </span>
            </span>
          </div>
        </div>
        <p className="small__header">Border Countries</p>
        <div className="borders__wrapper">
          {country.borders.length > 0 &&
            country.borders.map((el, id) => (
              <Link to={`/${el}`} key={id}>
                <div className="border">{el}</div>
              </Link>
            ))}
          {country.borders.length === 0 && <p className="field">No borders!</p>}
        </div>
      </div>
    </main>
  );
};

export default Details;
