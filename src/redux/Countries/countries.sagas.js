import { takeLatest, call, all, put } from "redux-saga/effects";
import countriesTypes from "./countries.types";
import { fetchDataSuccess } from "./countries.actions";

export function* fetchData() {
  try {
    const data = yield fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => data);
    yield put(fetchDataSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

export function* onFetchDataStart() {
  yield takeLatest(countriesTypes.FETCH_DATA_START, fetchData);
}

export default function* countriesSagas() {
  yield all([call(onFetchDataStart)]);
}
