import { combineReducers } from "redux";
import { apiReducer } from "../redux/apiCalling/reducer";
import shopReducer from "../redux/shopping/reducer"
const rootReducer=combineReducers({
    shop: shopReducer,
    api:apiReducer,
});
export default rootReducer;