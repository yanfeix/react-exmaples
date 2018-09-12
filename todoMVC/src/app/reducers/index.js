import { combineReducers } from 'redux';
import todoListReducer from './todoListReducer';
import filterTypeReducer from './filterTypeReducer';

const todoApp = combineReducers({
    todoList: todoListReducer,
    filterType: filterTypeReducer,
});

export default todoApp;
