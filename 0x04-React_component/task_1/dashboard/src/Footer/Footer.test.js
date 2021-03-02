import React from "react";
import Footer from "./Footer";
import { shallow } from 'enzyme';

describe("Testing the behavior of Footer component", () => {
    it("Footer renders without crashing", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toEqual(true);
    });

    it("Footer renders his children", () => {
        const wrapper = shallow(<Footer />);
        wrapper.update();
        expect(wrapper.find('p').text()).toContain("Copyright");
    });
});