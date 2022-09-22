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
    case actionTypeApi.SEARCH_ITEM:
      console.log("qq", action);
      return {
        ...state,
        apiData: state.data.filter((prod) =>
          prod.title.toLowerCase().includes(action.payload)
        ),
      };
    case actionTypeApi.SORT_ASC:
      const sortAsc = action.payload.sort((a, b) =>
        a.title < b.title ? 1 : a.title > b.title ? -1 : 0
      );
      return {
        ...state,
        apiData: sortAsc,
      };
    case actionTypeApi.SORT_DESC:
      const sortDesc = action.payload.sort((a, b) =>
        a.title < b.title ? -1 : a.title > b.title ? 1 : 0
      );
      return {
        ...state,
        apiData: sortDesc,
      };
    default:
      return state;
  }
}
