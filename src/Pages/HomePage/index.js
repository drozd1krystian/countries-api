import React, { useEffect } from "react";
import "./style.scss";
import Filters from "../../components/Filters";
import Countries from "../../components/Countries";
import { fetchDataStart } from "../../redux/Countries/countries.actions";
import { useDispatch, useSelector } from "react-redux";

const mapState = ({ countries }) => ({
  region: countries.region,
  name: countries.name,
});

const HomePage = (props) => {
  const dispatch = useDispatch();
  const { region, name } = useSelector(mapState);

  useEffect(() => {
    dispatch(fetchDataStart({ region, name }));
  }, [dispatch, region, name]);
  return (
    <div className="page">
      <Filters />
      <Countries />
    </div>
  );
};

export default HomePage;
