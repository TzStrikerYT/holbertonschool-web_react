import React from "react";
import App from "./App";
import { shallow } from 'enzyme';

describe("Testing the behavior of App component", () => {
    it("App renders without crashing", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists());
    });
    it("App renders App-header", () => {
        const wrapper = shallow(<App />);
        wrapper.update();
        expect(wrapper.find(".App-header")).toHaveLength(1);
    });
    it("App renders App-body", () => {
        const wrapper = shallow(<App />);
        wrapper.update();
        expect(wrapper.find(".App-body")).toHaveLength(1);
    });
    it("App renders App-footer", () => {
        const wrapper = shallow(<App />);
        wrapper.update();
        expect(wrapper.find(".App-footer")).toHaveLength(1);
    });
});