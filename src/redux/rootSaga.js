import { all, call } from "redux-saga/effects";
import countriesSagas from "./Countries/countries.sagas";

export default function* rootSaga() {
  yield all([call(countriesSagas)]);
}
