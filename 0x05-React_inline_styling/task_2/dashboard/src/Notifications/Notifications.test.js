import React from "react";
import Notifications from "./Notifications";
import { shallow } from 'enzyme';
import { getLatestNotification } from "../utils/utils";
import {StyleSheetTestUtils} from "aphrodite";

describe("Testing the behavior of Notification component", () => {
    let listNotifications;
    let latestNotification;

    beforeAll(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });
    afterAll(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it("Notifications renders without crashing", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toEqual(true);
    });

    it("Notifications renders without crashing", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toEqual(true);
    });

    it("menu item is being displayed when displayDrawer is false", () => {
        const wrapper = shallow(<Notifications />);
        wrapper.update();
        const item = wrapper.find("div#menuItem");
        expect(item).toHaveLength(1);
    });
    it("div.Notifications is not being displayed when displayDrawer is false", () => {
        const wrapper = shallow(<Notifications />);
        wrapper.update();
        const item = wrapper.find("div#Notifications");
        expect(item).toHaveLength(1);
    });
    it("menu item is being displayed when displayDrawer is true", () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        wrapper.update();
        const item = wrapper.find("div#menuItem");
        expect(item).toHaveLength(1);
    });
    it("div.Notifications is being displayed when displayDrawer is true", () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        wrapper.update();
        const item = wrapper.find("div#Notifications");
        expect(item).toHaveLength(1);
    });

    describe("Notifications with listNotifications", () => {
        beforeEach(() => {
            latestNotification = getLatestNotification();
            listNotifications = [
                { id: 1, type: "default", value: "New course available" },
                { id: 2, type: "urgent", value: "New resume available" },
                { id: 3, type: "urgent", html: { __html: latestNotification } },
            ];
        });

        it("Notifications renders Notification Items and items have correct html", () => {
            const wrapper = shallow(
                <Notifications displayDrawer listNotifications={listNotifications} />
            );
            expect(wrapper.exists()).toEqual(true);
            wrapper.update();
            const listItems = wrapper.find("NotificationItem");
            expect(listItems).toBeDefined();
            expect(listItems).toHaveLength(3);
            expect(listItems.at(0).html()).toEqual(
                '<li data-notification-type="default" class="default_1tsdo2i">New course available</li>'
            );
            expect(listItems.at(1).html()).toEqual(
                '<li data-notification-type="urgent" class="urgent_137u7ef">New resume available</li>'
            );
            expect(listItems.at(2).html()).toEqual(
                `<li data-notification-type="urgent" class="urgent_137u7ef">${latestNotification}</li>`
            );
        });
    });

    describe("Notifications without listNotifications or empty listNotifications", () => {
        beforeEach(() => {
            listNotifications = [];
        });

        it("Notifications renders Notification Item correct with empty listNotifications", () => {
            const wrapper = shallow(
                <Notifications displayDrawer listNotifications={listNotifications} />
            );
            expect(wrapper.exists()).toEqual(true);
            wrapper.update();
            const listItems = wrapper.find("NotificationItem");
            expect(listItems).toHaveLength(1);
            expect(listItems.html()).toEqual(
                '<li data-notification-type="default" class="default_1tsdo2i">No new notification for now</li>'
            );
        });

        it("Notifications renders Notification Item correct without listNotifications", () => {
            const wrapper = shallow(<Notifications displayDrawer />);
            wrapper.update();
            const listItems = wrapper.find("NotificationItem");
            expect(listItems).toHaveLength(1);
            expect(listItems.html()).toEqual(
                '<li data-notification-type="default" class="default_1tsdo2i">No new notification for now</li>'
            );
        });

        it("Mount and verify the message are printed", () => {
            const wrapper = shallow(<Notifications displayDrawer />);

            console.log = jest.fn();

            const instance = wrapper.instance();

            const id = 5;

            instance.markAsRead(id);

            expect(console.log).toHaveBeenCalledWith(
                `Notification ${id} has been marked as read`
            );
            jest.restoreAllMocks();
        });

        it("does not rerender when updating the props of the component with the same list", () => {
            const listNotifications = [
                { id: 1, type: "default", value: "New course available" },
                { id: 2, type: "urgent", value: "New resume available" },
            ];

            const wrapper = shallow(
                <Notifications displayDrawer listNotifications={listNotifications} />
            );

            const shouldComponentUpdate = jest.spyOn(
                Notifications.prototype,
                "shouldComponentUpdate"
            );

            wrapper.setProps({ listNotifications: listNotifications });

            expect(shouldComponentUpdate).toHaveBeenCalled();
            expect(shouldComponentUpdate).toHaveLastReturnedWith(false);

            jest.restoreAllMocks();
        });

        it("does rerender when updating the props of the component with a longer list", () => {
            let listNotifications = [
                { id: 1, type: "default", value: "New course available" },
                { id: 2, type: "urgent", value: "New resume available" },
            ];

            const listNotifications2 = [
                { id: 1, type: "default", value: "New course available" },
                { id: 2, type: "urgent", value: "New resume available" },
                { id: 3, type: "urgent", html: { __html: latestNotification } },
            ];

            console.log(listNotifications);
            const wrapper = shallow(
                <Notifications displayDrawer listNotifications={listNotifications} />
            );

            const shouldComponentUpdate = jest.spyOn(
                Notifications.prototype,
                "shouldComponentUpdate"
            );

            wrapper.setProps({ listNotifications: listNotifications2 });

            expect(shouldComponentUpdate).toHaveBeenCalled();
            expect(shouldComponentUpdate).toHaveLastReturnedWith(true);

            jest.restoreAllMocks();
        });
    });
});