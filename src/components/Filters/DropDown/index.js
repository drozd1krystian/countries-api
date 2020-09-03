import React, { useState } from "react";
import "./style.scss";
import useDetectOutsideClick from "../../../hooks/useOutsideClick";
import { useRef } from "react";
import { ReactComponent as ArrowDown } from "../../../assets/arrow-down.svg";

const regions = [
  "All",
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
  "Polar",
];

const DropDown = (props) => {
  const [isOpen, setIsOpen] = useState();
  const [active, setActive] = useState("Filter by region");
  const optionsRef = useRef(null);
  const selectRef = useRef(null);

  useDetectOutsideClick(optionsRef, setIsOpen, selectRef);

  return (
    <div
      className="dropdown"
      onClick={() => setIsOpen(!isOpen)}
      ref={selectRef}
    >
      <div className="dropdown__wrapper">
        <span className="dropdown__title">{active}</span>
        <ArrowDown className="dropdown__icon" />
      </div>

      <ul
        className={
          isOpen ? "dropdown__list dropdown__list--open" : "dropdown__list"
        }
        ref={optionsRef}
      >
        {regions.map((el, id) => (
          <li
            className={
              active === el ? "list__item list__item--active" : "list__item"
            }
            key={id}
            onClick={() => setActive(el)}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
