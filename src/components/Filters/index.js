import React, { useState } from "react";
import "./style.scss";
import DropDown from "./DropDown";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { setCountryName } from "../../redux/Countries/countries.actions";
import { useEffect } from "react";

const mapState = ({ countries }) => ({
  countryName: countries.name,
});

const Filters = (props) => {
  const { countryName } = useSelector(mapState);
  const [name, setName] = useState(countryName);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    if (countryName !== name) {
      const timeoutId = setTimeout(() => dispatch(setCountryName(name)), 400);
      return () => clearTimeout(timeoutId);
    }
  }, [name, dispatch, countryName]);
  return (
    <div className="filters">
      <SearchBar
        handleChange={(e) => handleInputChange(e)}
        defaultValue={name}
      />
      <DropDown />
    </div>
  );
};

export default Filters;
