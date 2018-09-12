import { FilterAction, FilterType } from '../constant';

function filterTypeReducer(preState = FilterType.ALL, action) {
    switch (action.type) {
        case FilterAction.SET_FILTER_TYPE:
            return action.payload;
        default:
            return preState;
    }
}

export default filterTypeReducer;
