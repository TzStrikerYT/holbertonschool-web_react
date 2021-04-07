import { filterTypeSelected, getNotifications, getUnreadNotifications } from "./notificationSelector";
import { notificationReducer } from "../reducers/notificationReducer";
import {FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ} from "../actions/notificationActionTypes";
import {notificationsNormalizer} from "../schema/notifications";
import {fromJS, Map} from "immutable";

describe("courseReducer tests", function () {
    const action = {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        data: [
            {
                id: 1,
                type: "default",
                value: "New course available",
            },
            {
                id: 2,
                type: "urgent",
                value: "New resume available",
            },
            {
                id: 3,
                type: "urgent",
                value: "New data available",
            },
        ],
    };

    const data = [
        {
            id: 1,
            type: "default",
            value: "New course available",
        },
        {
            id: 2,
            type: "urgent",
            value: "New resume available",
        },
        {
            id: 3,
            type: "urgent",
            value: "New data available",
        },
    ];

    const normalizedData = notificationsNormalizer(data);

    const expectedData = {
        filter: "DEFAULT",
        ...normalizedData,
    };
    expectedData.notifications[1].isRead = false;
    expectedData.notifications[2].isRead = false;
    expectedData.notifications[3].isRead = false;

    const initialState = notificationReducer(undefined, action);
    it("test that filterTypeSelected works as expected", () => {
        const selector = filterTypeSelected(initialState);
        expect(selector).toEqual(expectedData.filter);
    });

    it("test that getNotifications works as expected", () => {
        const action = {
            type: MARK_AS_READ,
            index: 2,
        };
        const state = notificationReducer(initialState, action)
        const selector = getNotifications(state);

        expectedData.notifications[2].isRead = true;
        expect(selector).toEqual(expectedData.notifications);
    });

    it("test that getUnreadNotifications works as expected", () => {
        const action = {
            type: MARK_AS_READ,
            index: 2,
        };
        const state = notificationReducer(initialState, action)

        const selector = getUnreadNotifications(state);

        const unReadNotifications = [
            {
                id: 1,
                isRead: false,
                type: "default",
                value: "New course available",
            },
            {
                id: 3,
                isRead: false,
                type: "urgent",
                value: "New data available",
            },
        ]
        const expected = notificationsNormalizer(unReadNotifications)

        expect(selector instanceof Map).toEqual(true);

        const selector_2 = notificationsNormalizer(selector.toJS())

        expect(selector_2).toEqual(expected);
    });
});