import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducers from "./reducers";

let store = null;
store = createStore(rootReducers, applyMiddleware(thunk, createLogger()));

export default store;
