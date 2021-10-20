import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const myStore = createStore(rootReducer, composeWithDevTools());

export default myStore;
