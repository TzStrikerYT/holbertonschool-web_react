import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { rootReducer, initialState } from "./reducers/rootReducer";
import "redux-devtools-extension";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers(rootReducer),
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
