import countriesTypes from "./countries.types";

export const fetchDataStart = () => ({
  type: countriesTypes.FETCH_DATA_START,
});

export const fetchDataSuccess = (data) => ({
  type: countriesTypes.FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataError = (error) => ({
  type: countriesTypes.FETCH_DATA_ERROR,
  payload: error,
});
