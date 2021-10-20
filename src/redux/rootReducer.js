import { combineReducers } from "redux";
import shoppingReducer from "./Shopping/shopping-reducers";

const rootReducer = combineReducers({
  shop: shoppingReducer,
});

export default rootReducer;
