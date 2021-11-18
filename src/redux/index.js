import { reducer } from "./reducers";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const middlewares = [
  thunk
];

export const store = createStore(reducer,
  applyMiddleware(...middlewares)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for dev tools
);

