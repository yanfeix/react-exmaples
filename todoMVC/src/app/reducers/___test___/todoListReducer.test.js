import { UserAction } from '../../constant';
import * as L from '../todoListReducer.func';
import todoListReducer from '../todoListReducer';

jest.mock('../todoListReducer.func');

describe(' Todo List Reducer ', () => {
    const actionFuncMap = {};
    actionFuncMap[UserAction.ADD] = L.getAfterAdded;
    actionFuncMap[UserAction.REMOVE] = L.getAfterRemoved;
    actionFuncMap[UserAction.ACTIVATE] = L.getAfterActivated;
    actionFuncMap[UserAction.COMPLETE] = L.getAfterCompleted;
    actionFuncMap[UserAction.MODIFY] = L.getAfterModfied;
    actionFuncMap[UserAction.CLEAR_COMPLETED] = L.getAfterClearCompleted;
    actionFuncMap[UserAction.TOGGLE] = L.getAfterToggled;

    it(' get the todo list after each action was operated', () => {
        Object.keys(actionFuncMap).forEach((key) => {
            const func = actionFuncMap[key];
            const action = { type: key, payload: {} };
            todoListReducer([], action);
            expect(func).toHaveBeenCalled();
        });
    });
});
