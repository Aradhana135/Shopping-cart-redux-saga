export const API_CALL_REQUEST = "API_CALL_REQUEST";
export const API_CALL_SUCCESS = "API_CALL_SUCCESS";
export const API_CALL_FAILURE = "API_CALL_FAILURE";
export const SEARCH = "SEARCH";
// export const SORT_POSTS_ASC = 'SORT_POSTS_ASC';
// export const SORT_POSTS_DESC = 'SORT_POSTS_DESC';
// export const SEARCH_POSTS = 'SEARCH_POSTS';

export const search = (value) => {
  console.log("ww", value);
  return {
    type: SEARCH,
    payload: value,
  };
};
