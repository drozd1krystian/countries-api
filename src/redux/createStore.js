import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import createSagaMiddle from "redux-saga";
import thunk from "redux-thunk";

const sagaMiddleware = createSagaMiddle();
export const middlewares = [logger, thunk, sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export default store;
