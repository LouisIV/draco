import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

export const configureStore = () => {
  const middleware = [thunk];
  return createStore(reducer, applyMiddleware(...middleware));
};
