import * as LS from '../localStorage';
import { UserAction } from '../constant';

const localStorager = store => next => (action) => {
    const result = next(action);
    switch (action.type) {
        case UserAction.ADD:
        case UserAction.REMOVE:
        case UserAction.ACTIVATE:
        case UserAction.COMPLETE:
        case UserAction.MODIFY:
        case UserAction.CLEAR_COMPLETED:
        case UserAction.TOGGLE:
            LS.saveToLocalStorage(store.getState().todoList);
            break;
        default:
            break;
    }
    return result;
};

export default localStorager;
