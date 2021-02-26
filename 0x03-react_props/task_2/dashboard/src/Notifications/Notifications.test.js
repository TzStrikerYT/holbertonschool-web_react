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

    it("Notifications renders without crashing", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists());
    });

    it("Notifications renders Notification Item and first item has correct html", () => {
        const wrapper = shallow(<Notifications />);
        wrapper.update();
        const listItems = wrapper.find("NotificationItem");
        expect(listItems).toBeDefined();
        expect(listItems.first().html()).toEqual(
            '<li data-notification-type="default">New course available</li>'
        );
    });

});