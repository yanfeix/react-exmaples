import { UserAction } from '../constant';
import makeTodoItem from '../util';

function addTodo(text) {
    return {
        type: UserAction.ADD,
        payload: makeTodoItem(text),
    };
}

function removeTodo(todo) {
    return {
        type: UserAction.REMOVE,
        payload: todo,
    };
}

function modifyTodo(todo, newVal) {
    return {
        type: UserAction.MODIFY,
        payload: {
            todo, newVal,
        },
    };
}

function activateTodo(todo) {
    return {
        type: UserAction.ACTIVATE,
        payload: todo,
    };
}

function completeTodo(todo) {
    return {
        type: UserAction.COMPLETE,
        payload: todo,
    };
}

function clearCompletedTodo() {
    return {
        type: UserAction.CLEAR_COMPLETED,
    };
}

function toggleAll(checked) {
    return {
        type: UserAction.TOGGLE,
        payload: { checked },
    };
}

export {
    addTodo, removeTodo, modifyTodo, activateTodo, completeTodo, clearCompletedTodo, toggleAll,
};
