import React from "react";
import App from "./App";
import { shallow } from 'enzyme';

describe("Testing the behavior of App component", () => {
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
    it("Should contain the Login component", () => {
        const wrapper = shallow(<App />);
        wrapper.update();
        expect(wrapper.find("Login")).toHaveLength(1);
    });
    it("Should contain the Footer component", () => {
        const wrapper = shallow(<App />);
        wrapper.update();
        expect(wrapper.find("Footer")).toHaveLength(1);
    });
});