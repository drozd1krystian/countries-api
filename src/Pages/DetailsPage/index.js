import React, { useEffect, useState } from "react";
import "./style.scss";
import { useParams, Link, useHistory } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";
import Details from "../../components/Details";

const DetailsPage = (props) => {
  const { name } = useParams("name");
  const [country, setCountry] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const getCountryData = async () => {
      try {
        await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
          .then((res) => res.json())
          .then(async (result) => {
            if (result.status === 404) history.push("/");
            const borders = result[0].borders.join(";");
            await fetch(
              `https://restcountries.eu/rest/v2/alpha?codes=${borders}`
            )
              .then((res) => res.json())
              .then((borderResult) => {
                if (borderResult.status === 404) return;
                const borderCountries = borderResult
                  .map((el) => el.name)
                  .sort();
                result[0].borders = borderCountries;
              });

            setCountry(result[0]);
          });
      } catch (e) {
        console.log(e);
      }
    };
    getCountryData();
  }, [setCountry, name, history]);

  return (
    <div className="page">
      <div className="btn__wrapper">
        <Link to="/" className="btn--back">
          <ArrowLeft /> <span className="field">Back</span>
        </Link>
      </div>
      {country && <Details country={country} />}
    </div>
  );
};

export default DetailsPage;
