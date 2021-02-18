import React from "react";
import Notifications from "./Notifications";
import { shallow } from 'enzyme';

describe("Testing the behavior of Notification component", () => {
    it("Notifications renders without crashing", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists());
    });
    it("Notifications renders close-button", () => {
        const wrapper = shallow(<Notifications />);
        wrapper.update();
        expect(wrapper.find(".close-button")).toHaveLength(1);
    });
    it("Notifications renders list", () => {
        const wrapper = shallow(<Notifications />);
        wrapper.update();
        expect(wrapper.find("li")).toHaveLength(3);
    });
    it("Notifications renders the string p", () => {
        const msg = "Here is the list of notifications";
        const wrapper = shallow(<Notifications />);
        wrapper.update();
        expect(wrapper.find(".Notifications p").text()).toEqual(msg);
    });
});