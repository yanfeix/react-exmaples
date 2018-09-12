import uuid from 'uuid';

import {
    getAfterAdded, getAfterRemoved, getAfterModfied,
} from '../todoListReducer.func';

describe(' Todo List Reducer Functions ', () => {
    const todoA = {
        id: uuid(),
        name: 'todo AA ',
        createdTime: Date.now(),
        active: true,
    };
    const todoB = {
        id: uuid(),
        name: 'todo BB ',
        createdTime: Date.now(),
        active: true,
    };

    let todoList = [];

    beforeEach(() => {
        todoList = [todoA, todoB];
    });

    it(' get todo list after data was added ', () => {
        const tempTodo = { // atom data
            id: uuid(),
            name: 'todo temp ',
            createdTime: Date.now(),
            active: true,
        };
        const result = [...todoList, tempTodo];
        expect(getAfterAdded(todoList, tempTodo)).toMatchObject(result);
    });

    it(' get todo list after data was removed', () => {
        const target = { ...todoA };
        const result = todoList.filter(elem => elem.id !== target.id);
        expect(getAfterRemoved(todoList, todoA)).toMatchObject(result);
    });

    it(' get todo list after data was modified', () => {
        const newVal = 'This is the new val';
        const placement = { ...todoA };
        let target = todoList.find(el => el.id === placement.id);
        placement.name = newVal;
        target = { ...placement };
        const result = [...todoList];
        expect(getAfterModfied(todoList, target, newVal)).toMatchObject(result);
    });
});
