import { takeLatest, call, all, put } from "redux-saga/effects";
import countriesTypes from "./countries.types";
import { fetchDataSuccess } from "./countries.actions";

export function* fetchData({ payload: filters }) {
  const { region, name } = filters;
  let query = "https://restcountries.eu/rest/v2/all";

  if (region.toLowerCase() !== "all")
    query = query.replace("all", `region/${region}`);
  try {
    const data = yield fetch(query)
      .then((res) => res.json())
      .then((data) => {
        if (name !== "")
          data = data.filter((el) =>
            el.name.toLowerCase().includes(name.toLowerCase())
          );
        return data;
      });
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
