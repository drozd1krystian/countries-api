import React, { useEffect } from "react";
import "./style.scss";
import Filters from "../../components/Filters";
import Countries from "../../components/Countries";
import { fetchDataStart } from "../../redux/Countries/countries.actions";
import { useDispatch, useSelector } from "react-redux";

const mapState = ({ countries }) => ({
  countries: countries.countries,
  region: countries.region,
  name: countries.name,
});

const HomePage = (props) => {
  const dispatch = useDispatch();
  const { countries, region, name } = useSelector(mapState);

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchDataStart({ region, name }));
    }
  }, [dispatch, region, name, countries.length]);
  return (
    <div className="page">
      <Filters />
      <Countries />
    </div>
  );
};

export default HomePage;
