import React, { useState } from "react";
import "./style.scss";
import DropDown from "./DropDown";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { setCountryName } from "../../redux/Countries/countries.actions";
import { useEffect } from "react";

const Filters = (props) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => dispatch(setCountryName(name)), 400);
    return () => clearTimeout(timeoutId);
  }, [name, dispatch]);
  return (
    <div className="filters">
      <SearchBar handleChange={(e) => handleInputChange(e)} />
      <DropDown />
    </div>
  );
};

export default Filters;
