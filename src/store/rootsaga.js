import { takeLatest } from "redux-saga/effects";
import { workSaga } from "../redux/apiCalling/saga";
export function* rootSaga() {
    yield takeLatest("API_CALL_REQUEST", workSaga);
  }
