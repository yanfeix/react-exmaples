import { UserAction } from '../constant';
import * as LS from '../localStorage';
import {
    getAfterAdded, getAfterRemoved, getAfterActivated, getAfterCompleted,
    getAfterModfied, getAfterClearCompleted, getAfterToggled,
} from './todoListReducer.func';

const initialData = LS.readFromLocalStorage();

function todoListReducer(data = initialData, action) {
    const item = action.payload;
    switch (action.type) {
        case UserAction.ADD:
            return getAfterAdded(data, item);
        case UserAction.REMOVE:
            return getAfterRemoved(data, item);
        case UserAction.ACTIVATE:
            return getAfterActivated(data, item);
        case UserAction.COMPLETE:
            return getAfterCompleted(data, item);
        case UserAction.MODIFY:
            return getAfterModfied(data, item.todo, item.newVal);
        case UserAction.CLEAR_COMPLETED:
            return getAfterClearCompleted(data);
        case UserAction.TOGGLE:
            return getAfterToggled(data, item.checked);
        default:
            return data;
    }
}

export default todoListReducer;
