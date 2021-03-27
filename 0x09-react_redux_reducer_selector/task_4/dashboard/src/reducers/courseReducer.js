import {
    FETCH_COURSE_SUCCESS,
    SELECT_COURSE,
    UNSELECT_COURSE,
} from "../actions/courseActionTypes";
import { coursesNormalizer } from '../schema/courses';
import { Map, fromJS } from 'immutable';


export function courseReducer(state = Map([]), action) {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS: {
            const normalizedData = coursesNormalizer(action.data);
            Object.keys(normalizedData).map((key) => {
                normalizedData[key].isSelected = false;
            });
            return state.merge(normalizedData).toJS();
        }
        case SELECT_COURSE: {
            return state.setIn([String(action.index), "isSelected"], true).toJS();
        }

        case UNSELECT_COURSE: {
            const ordered_list_by_id_map = fromJS(state).sortBy(course => course.get("id"));
            const data  = ordered_list_by_id_map.setIn([action.index -1, "isSelected"], false)

            return data.toJS();
        }

        default:
            return state.toJS();
    }
}