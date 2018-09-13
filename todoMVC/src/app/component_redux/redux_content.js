import {
    getFilteredTodoList, hasAllCompleted, isEmpty, getActiveCount,
} from '../selector';

import * as L from '../actions';

function mapStateToProps(state) {
    return {
        filteredTodoList: getFilteredTodoList(state),
        isVisible: !isEmpty(state),
        isAllCompleted: hasAllCompleted(state),
        activeCount: getActiveCount(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actionAddTodo: (txt) => { dispatch(L.addTodo(txt)); },
        actionActivateTodo: (todo) => { dispatch(L.activateTodo(todo)); },
        actionCompleteTodo: (todo) => { dispatch(L.completeTodo(todo)); },
        actionRemoveTodo: (todo) => { dispatch(L.removeTodo(todo)); },
        actionModifyTodo: (todo, newTxt) => { dispatch(L.modifyTodo(todo, newTxt)); },
        actionToggleAll: (checked) => { dispatch(L.toggleAll(checked)); },
        actionSetFilterType: (filterType) => { dispatch(L.setFilterType(filterType)); },
        actionClearCompletedTodo: () => { dispatch(L.clearCompletedTodo()); },
    };
}

export { mapDispatchToProps, mapStateToProps };
