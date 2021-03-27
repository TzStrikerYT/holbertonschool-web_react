import { LOGIN, LOGOUT, HIDE_NOTIFICATION_DRAWER, DISPLAY_NOTIFICATION_DRAWER } from './uiActionTypes';
import {setNotificationFilter} from "./notificationActionCreators";

export const login = (email, password) => {
    return {
        type: LOGIN,
        user: {
            email: email,
            password: password,
        }
    };
};

export const boundLogin = (email, password) => dispatch(login(email, password));

export const logout = () => {
    return {
        type: LOGOUT,
    };
};

export const boundLogout = () => dispatch(logout());

export const displayNotificationDrawer = () => {
    return {
        type: DISPLAY_NOTIFICATION_DRAWER,
    };
};

export const boundDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());

export const hideNotificationDrawer = () => {
    return {
        type: HIDE_NOTIFICATION_DRAWER,
    };
};

export const boundHideNotificationDrawer = () => dispatch(hideNotificationDrawer());
