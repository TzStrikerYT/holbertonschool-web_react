import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { uiReducer, initialState } from "./reducers/uiReducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Map } from "immutable";

const store = createStore(uiReducer, Map(initialState), applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
