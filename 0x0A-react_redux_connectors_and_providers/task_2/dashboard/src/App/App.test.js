import { shallow, mount } from "enzyme";
import React from "react";
import { App, listNotificationsInitialState, mapStateToProps } from "./App";
import { StyleSheetTestUtils } from "aphrodite";

import { fromJS } from "immutable";
import { createStore } from "redux";
import {uiReducer, initialState } from "../reducers/uiReducer";;

const store = createStore(uiReducer, initialState)

describe("<App />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("App renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("should contain the Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it("should contain the Login component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Login")).toHaveLength(1);
  });

  it("CourseList is not displayed with isLoggedIn false by default", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });

  it("isLoggedIn is true", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);

    expect(wrapper.find("Login")).toHaveLength(0);
    expect(wrapper.find("CourseList")).toHaveLength(1);
  });

  it("verify that markNotificationAsRead works as intended", () => {
    const wrapper = shallow(<App />);

    const instance = wrapper.instance();

    expect(wrapper.state().listNotifications).toEqual(
        listNotificationsInitialState
    );

    instance.markNotificationAsRead(4);

    expect(wrapper.state().listNotifications).toEqual(
        listNotificationsInitialState
    );

    instance.markNotificationAsRead(3);

    expect(wrapper.state().listNotifications).toEqual(
        listNotificationsInitialState.slice(0, 2)
    );

    instance.markNotificationAsRead(1);

    expect(wrapper.state().listNotifications).toEqual(
        listNotificationsInitialState.slice(1, 2)
    );
  });
});

describe("<App Redux/>", () => {
  it("verify the connect react props works correctly in mapStateToProps", () => {
    let state = fromJS({
      isUserLoggedIn: true
    });
    const a = mapStateToProps(state);
    expect(a).toEqual({ isLoggedIn: true })
  });
  it("mapStateToProps returns the right object from displayDrawer when this change the state", () => {
    let state = fromJS({
      isNotificationDrawerVisible: true,
    });

    const result = mapStateToProps(state);

    expect(result).toEqual({ displayDrawer: true });
  });
});
