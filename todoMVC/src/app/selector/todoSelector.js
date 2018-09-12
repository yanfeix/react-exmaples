import { createSelector } from 'reselect';
import { FilterType } from '../constant';

const todoListSelector = state => state.todoList;
const filterTypeSelector = state => state.filterType;

const getFilteredTodoList = createSelector(
    [todoListSelector, filterTypeSelector], (todoList, filterType) => {
        switch (filterType) {
            case FilterType.ALL:
                return todoList;
            case FilterType.ACTIVE:
                return todoList.filter(todo => todo.active);
            case FilterType.COMPLETED:
                return todoList.filter(todo => !todo.active);
            default:
                return todoList;
        }
    },
);

const hasAllCompleted = createSelector([todoListSelector], (todoList) => {
    const completedList = todoList.filter(el => !el.active);
    if (completedList.length === todoList.length) {
        return true;
    }
    return false;
});

const isEmpty = createSelector([todoListSelector], todoList => todoList.length === 0);

const getActiveCount = createSelector([todoListSelector], (todoList) => {
    const activeList = todoList.filter(el => el.active);
    return activeList.length;
});

export {
    getFilteredTodoList, hasAllCompleted, isEmpty, getActiveCount,
};
