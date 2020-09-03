import { combineReducers } from "redux";

import countriesReducer from "./Countries/countries.reducer";

export default combineReducers({
  countries: countriesReducer,
});
