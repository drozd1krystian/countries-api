import countriesTypes from "./countries.types";

const INITIAL_STATE = {
  countries: [],
  name: "",
  region: "",
  isLoading: true,
};

const countriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case countriesTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        countries: [...action.payload],
      };
    case countriesTypes.SET_REGION:
      return {
        ...state,
        region: action.payload,
      };
    case countriesTypes.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case countriesTypes.TOGGLE_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default countriesReducer;
