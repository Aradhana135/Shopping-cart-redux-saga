import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware } from "redux";
// import { watcherSaga } from "../redux/apiCalling/saga";
import { rootSaga } from "./rootsaga";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
// sagaMiddleware.run(watcherSaga);
sagaMiddleware.run(rootSaga);
export default store;
