import * as actionTypeApi from "./action";
const initialState = {
  fetching: false,
  apiData: null,
  error: null,
  data: null,
  // searchResults: [],
};
export function apiReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypeApi.API_CALL_REQUEST:
      return { ...state, fetching: true };
    case actionTypeApi.API_CALL_SUCCESS:
      return {
        ...state,
        apiData: action.payload.apiData,
        searchResults: action.payload.data,
        data: action.payload.apiData,
      };
    case actionTypeApi.API_CALL_FAILURE:
      return { ...state, error: action.payload.error };
    case actionTypeApi.SEARCH:
      console.log("qq", action);
      return {
        ...state,
        apiData: state.data.filter((prod) =>
          prod.title.includes(action.payload)
        ),
      };
    default:
      return state;
  }
}
