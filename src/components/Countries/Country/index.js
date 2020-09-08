import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Country = ({ country }) => {
  const exitVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    <Link to={country.name}>
      <motion.div
        className="country__wrapper"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={exitVariants}
      >
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
      </motion.div>
    </Link>
  );
};

export default Country;
