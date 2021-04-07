import {fromJS} from "immutable";

export const filterTypeSelected = (filterState) => {
    return filterState.get("filter")
}

export const getNotifications = (notificationsState) => {
    return notificationsState.get("notifications")
}

export const getUnreadNotifications = (notificationsState) => {
    const notifications = fromJS(notificationsState.get("notifications"));
    return notifications.filter(value => value.get("isRead") === false);
}