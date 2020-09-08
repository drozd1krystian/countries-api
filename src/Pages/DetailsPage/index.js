import React, { useEffect, useState } from "react";
import "./style.scss";
import { useParams, Link, useHistory } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";
import Details from "../../components/Details";
import { getCountryData } from "../../Utils/data";
import { useSelector } from "react-redux";

const mapState = ({ countries }) => ({
  countries: countries.countries,
});

const DetailsPage = (props) => {
  const { name } = useParams("name");
  const [country, setCountry] = useState(null);
  const { countries } = useSelector(mapState);
  const history = useHistory();

  useEffect(() => {
    const fetch = async () => {
      const data =
        countries.find((el) => el.name === name) ||
        (await getCountryData(name));
      if (!data) history.push("/");
      setCountry(data);
    };
    fetch();
  }, [setCountry, name, history, countries]);

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
