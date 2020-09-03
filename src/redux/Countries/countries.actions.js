import countriesTypes from "./countries.types";

export const fetchDataStart = (filters) => (dispatch) => {
  dispatch({
    type: countriesTypes.TOGGLE_LOADING,
    payload: true,
  });

  dispatch({
    type: countriesTypes.FETCH_DATA_START,
    payload: filters,
  });
};

export const fetchDataSuccess = (data) => (dispatch) => {
  dispatch({
    type: countriesTypes.FETCH_DATA_SUCCESS,
    payload: data,
  });

  setTimeout(
    () =>
      dispatch({
        type: countriesTypes.TOGGLE_LOADING,
        payload: false,
      }),
    2000
  );
};

export const fetchDataError = (error) => ({
  type: countriesTypes.FETCH_DATA_ERROR,
  payload: error,
});

export const setCountryName = (name) => ({
  type: countriesTypes.SET_NAME,
  payload: name,
});

export const setRegion = (region) => ({
  type: countriesTypes.SET_REGION,
  payload: region,
});
