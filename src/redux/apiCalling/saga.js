import {  call, put } from "redux-saga/effects";
import axios from "axios";
function fetchShoppingProducts() {
  return axios({
    method: "get",
    url: "https://fakestoreapi.com/products",
  });
}
export function* workSaga() {
  try {
    const response = yield call(fetchShoppingProducts);
    const apiData = response.data;
    yield put({ type: "API_CALL_SUCCESS", payload: { apiData: apiData } });
  } catch (error) {
    yield put({
      type: "API_CALL_FALIURE",
      payload: {
        error: error,
      },
    });
  }
}
