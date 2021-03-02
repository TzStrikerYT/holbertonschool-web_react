import { shallow, mount } from "enzyme";
import React from "react";
import NotificationItem from "./NotificationItem";

describe("Test the NotificationItem", () => {
    it("NotificationItem renders without crashing", () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists()).toEqual(true);
    });
    it("Verify that by passing dummy type and value props, it renders the correct html", () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        wrapper.update();
        const listItem = wrapper.find("li");

        expect(listItem).toHaveLength(1);
        expect(listItem.text()).toEqual("test");
        expect(listItem.prop("data-notification-type")).toEqual("default");
    });
    it("Passing a dummy html prop, it renders the correct html (for example", () => {
        const text = "Here is the list of notifications";
        const wrapper = shallow(<NotificationItem html={{ __html: "<u>test</u>" }} />);
        wrapper.update();
        const listItem = wrapper.find("li");
        expect(listItem.html()).toEqual('<li data-notification-type="default"><u>test</u></li>');
    });

    it("Spy the onClick function", () => {
        const id = 27;

        const wrapper = shallow(
            <NotificationItem type="default" value="test" id={id} />
        );

        const instance = wrapper.instance();

        instance.markAsRead = jest.fn();

        const listItem = wrapper.find("li").first();

        listItem.simulate("click");

        instance.markAsRead(id);

        expect(instance.markAsRead).toHaveBeenCalledWith(27);
        jest.restoreAllMocks();
    })
});