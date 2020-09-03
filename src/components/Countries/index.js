import React from "react";
import "./style.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataStart } from "../../redux/Countries/countries.actions";
import Country from "./Country";

const mapState = ({ countries }) => ({
  countries: countries.countries,
});

const Countries = (props) => {
  const dispatch = useDispatch();
  const { countries } = useSelector(mapState);

  useEffect(() => {
    console.log("elo");
    dispatch(fetchDataStart());
  }, [dispatch]);

  return (
    <div className="countries">
      {countries.map((el, id) => (
        <Country country={el} />
      ))}
    </div>
  );
};

export default Countries;
