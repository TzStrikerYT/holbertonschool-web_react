import {initialState, uiReducer} from "./uiReducer";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

describe("reducer tests", function () {
    it("verifying the state returned by the uiReducer function " +
        "equals the initial state when no action is passed", () => {
        const firstState = uiReducer(undefined, {});

        expect(firstState.toJS()).toEqual(initialState);
    });

    it("verifying the state returned by the uiReducer function " +
        "equals the initial state when the action SELECT_COURSE", () => {
        const firstState = uiReducer(undefined, { type: "SELECT_COURSE" });

        expect(firstState.toJS()).toEqual(initialState);
    });

    it("verifying the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER " +
        "is passed, changes correctly the isNotificationDrawerVisible property", () => {
        const firstState = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });

        expect(firstState.toJS()).toEqual({
            ...initialState,
            isNotificationDrawerVisible: true,
        });
    });
});