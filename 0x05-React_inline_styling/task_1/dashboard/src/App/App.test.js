import React from "react";
import App from "./App";
import { shallow, mount } from 'enzyme';
import {StyleSheetTestUtils} from "aphrodite";

describe("Testing the behavior of App component", () => {

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

    it("Should contain the Notifications component", () => {
        const wrapper = shallow(<App />);
        wrapper.update();
        expect(wrapper.find("Notifications")).toHaveLength(1);
    });

    it("Should contain the Header component", () => {
        const wrapper = shallow(<App />);
        wrapper.update();
        expect(wrapper.find("Header")).toHaveLength(1);
    });

    it("Should contain the Footer component", () => {
        const wrapper = shallow(<App />);
        wrapper.update();
        expect(wrapper.find("Footer")).toHaveLength(1);
    });

    it("CourseList is not displayed with isLoggedIn false by default", () => {
        const wrapper = shallow(<App />);
        wrapper.update();
        expect(wrapper.find("Login")).toHaveLength(1);
        expect(wrapper.find("CourseList")).toHaveLength(0);
    });

    it("isLoggedIn is true", () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        wrapper.update();
        expect(wrapper.find("Login")).toHaveLength(0);
        expect(wrapper.find("CourseList")).toHaveLength(1);
    });

    it("Mount and verify the keydown event with logged", () => {
        const events = {};
        const mockLogOut = jest.fn();

        document.addEventListener = jest.fn((event, callback) => {
            events[event] = callback;
        });

        window.alert = jest.fn();

        shallow(<App logOut={mockLogOut} />);

        events.keydown({ key: "h", ctrlKey: true });

        expect(window.alert).toHaveBeenCalledWith("Logging you out");
        expect(mockLogOut).toHaveBeenCalled();

        jest.restoreAllMocks();
    });
});