import countriesTypes from "./countries.types";

const INITIAL_STATE = {
  countries: [],
};

const countriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case countriesTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        countries: [...action.payload],
      };

    default:
      return state;
  }
};

export default countriesReducer;
