import {
    FETCH_COURSE_SUCCESS,
    SELECT_COURSE,
    UNSELECT_COURSE,
} from "../actions/courseActionTypes";


export function courseReducer(state = [], action) {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS: {
            return action.data.map((course) => {
                return {
                    ...course,
                    isSelected: false,
                };
            });
        }
        case SELECT_COURSE: {
            return state.map((course, index) => {
                const courseCopy = {...course};

                if (course.id === action.index) { courseCopy.isSelected = true; }

                return courseCopy;
            });
        }

        case UNSELECT_COURSE: {
            return state.map((course, index) => {
                const courseCopy = {...course};

                if (course.id === action.index) { courseCopy.isSelected = false; }

                return courseCopy;
            });
        }

        default:
            return state;
    }
}