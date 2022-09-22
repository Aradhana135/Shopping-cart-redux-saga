export const API_CALL_REQUEST = "API_CALL_REQUEST";
export const API_CALL_SUCCESS = "API_CALL_SUCCESS";
export const API_CALL_FAILURE = "API_CALL_FAILURE";
export const SEARCH_ITEM = "SEARCH_ITEM";
export const search = (value) => {
  return {
    type: SEARCH_ITEM,
    payload: value,
  };
};
