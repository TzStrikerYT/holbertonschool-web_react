import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";

export const defaultState = {
    notifications: [],
    filter: "DEFAULT",
}

export function notificationReducer(state = defaultState, action) {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS: {
            return {
                ...state,
                notifications: action.data.map(notification => {
                    const current = {
                        ...notification,
                        isRead: false,
                    }
                    return current;
                }),
            }
        }

        case MARK_AS_READ: {
            return {
                ...state,
                notifications: state.notifications.map((course) => {
                    const courseCopy = {...course};

                    if (course.id === action.index) { courseCopy.isRead = true; }

                    return courseCopy;
                })
            };
        }

        case SET_TYPE_FILTER: {
            return {
                ...state,
                filter: action.filter,
            }
        }

        default:
            return state;
    }
}