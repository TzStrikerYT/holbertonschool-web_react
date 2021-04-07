import { shallow, mount } from "enzyme";
import React from "react";
import App, { listNotificationsInitialState, mapStateToProps } from "./App";
import { StyleSheetTestUtils } from "aphrodite";
import AppContext, { user, logOut } from "./AppContext";
import { fromJS } from "immutable";
import {createStore} from "redux";
import {initialState, uiReducer} from "../reducers/uiReducer";

const store = createStore(uiReducer, initialState)

describe("<App />", () => {
  it("verify the connect react props works correctly in mapStateToProps", () => {
    let state = fromJS({
      isUserLoggedIn: true
    });
    const a = mapStateToProps(state);
    expect(a).toEqual({ isLoggedIn: true })
  });
});
