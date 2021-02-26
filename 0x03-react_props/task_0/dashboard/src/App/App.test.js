import React from "react";
import App from "./App";
import { shallow } from 'enzyme';

describe("Testing the behavior of App component", () => {
    it("App renders without crashing", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toEqual(true);
    });
});