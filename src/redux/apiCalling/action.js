export const API_CALL_REQUEST = "API_CALL_REQUEST";
export const API_CALL_SUCCESS = "API_CALL_SUCCESS";
export const API_CALL_FAILURE = "API_CALL_FAILURE";
export const SEARCH_ITEM = "SEARCH_ITEM";
export const SORT_POSTS_ASC="SORT_POSTS_ASC";
export const SORT_POSTS_DESC="SORT_POSTS_DESC";
export const search = (value) => {
  return {
    type: SEARCH_ITEM,
    payload: value,
  };
};
export const SORT_ASC=(value)=>{
    return{
        type:SORT_POSTS_ASC,
        payload:value
    }
}
export const SORT_DESC=(value)=>{
    return{
        type:SORT_POSTS_DESC,
        payload:value
    }
}