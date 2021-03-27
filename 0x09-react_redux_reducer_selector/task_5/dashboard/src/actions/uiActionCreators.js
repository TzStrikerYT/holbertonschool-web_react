import {
    LOGIN,
    LOGOUT,
    HIDE_NOTIFICATION_DRAWER,
    DISPLAY_NOTIFICATION_DRAWER,
    LOGIN_FAILURE,
    LOGIN_SUCCESS
} from './uiActionTypes';
import "node-fetch";

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

export const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS,
    };
};

export const boundLoginSuccess = () => dispatch(loginSuccess());

export const loginFailure = () => {
    return {
        type: LOGIN_FAILURE,
    };
};

export const boundLoginFailure = () => dispatch(loginFailure());

export const loginRequest = (email, password) => {
    return (dispatch) => {
        dispatch(login(email, password));
        return fetch("http://localhost:8564/login-success.json")
            .then((res) => res.json())
            .then((json) => dispatch(loginSuccess()))
            .catch((error) => dispatch(loginFailure()));
    };
};
