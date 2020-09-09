import countriesTypes from "./countries.types";

export const fetchDataStart = (filters) => ({
  type: countriesTypes.FETCH_DATA_START,
  payload: filters,
});

export const fetchDataSuccess = (data) => (dispatch) => {
  dispatch({
    type: countriesTypes.FETCH_DATA_SUCCESS,
    payload: data,
  });

  setTimeout(() => {
    dispatch({ type: countriesTypes.TOGGLE_LOADING, payload: false });
  }, 1000);
};

export const setCountryName = (name) => ({
  type: countriesTypes.SET_NAME,
  payload: name,
});

export const setRegion = (region) => ({
  type: countriesTypes.SET_REGION,
  payload: region,
});
