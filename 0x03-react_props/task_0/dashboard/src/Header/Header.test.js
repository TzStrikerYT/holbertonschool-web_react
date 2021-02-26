import React from "react";
import Header from "./Header";
import { shallow } from 'enzyme';

describe("Testing the behavior of Header component", () => {
    it("Header renders without crashing", () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper.exists()).toEqual(true);
    });
    it("App renders App-header", () => {
        const wrapper = shallow(<Header/>);
        wrapper.update();
        expect(wrapper.find(".App-header")).toHaveLength(1);
    });
});