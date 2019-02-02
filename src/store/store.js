import { createStore, combineReducers } from "redux";
import authReducer from "./reducers/auth";
import feedReducer from "./reducers/feed";

const rootReducer = combineReducers({
  auth: authReducer,
  feed: feedReducer
});

const store = createStore(rootReducer);

export default store;
