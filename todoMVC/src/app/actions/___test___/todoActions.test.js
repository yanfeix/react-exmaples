import uuid from 'uuid';
import { UserAction } from '../../constant';
import {
    addTodo, removeTodo, modifyTodo, activateTodo,
    completeTodo, clearCompletedTodo, toggleAll,
} from '../todoActions';

describe(' Todo CRUD Actions ', () => {
    const todo = {
        id: uuid(),
        name: 'Working on UT',
        active: true,
        createdTime: Date.now(),
    };

    it(' add todo to return an action object { type, payload } ', () => {
        const text = 'Working on Unit Testing';
        expect(addTodo(text)).toMatchSnapshot({
            payload: {
                id: expect.any(String),
                createdTime: expect.any(Number), // expect.any(Date) does not work here
            },
        });
    });

    it(' remove todo to return an action object { type, payload }', () => {
        const obj = {
            type: UserAction.REMOVE,
            payload: { ...todo },
        };
        expect(removeTodo(todo)).toMatchObject(obj);
    });

    it(' modify Todo, return an action object { type, payload }', () => {
        const newVal = 'Filling timesheet on Friday';
        const obj = {
            type: UserAction.MODIFY,
            payload: { todo, newVal },
        };
        expect(modifyTodo(todo, newVal)).toMatchObject(obj);
    });

    it(' activate Todo, return an action object { type, payload }', () => {
        const obj = {
            type: UserAction.ACTIVATE,
            payload: { ...todo },
        };
        expect(activateTodo(todo)).toMatchObject(obj);
    });

    it(' complete todo, return an action object { type, payload }', () => {
        const obj = {
            type: UserAction.COMPLETE,
            payload: { ...todo },
        };
        expect(completeTodo(todo)).toMatchObject(obj);
    });

    it(' clear completed Todo, return an action object { type }', () => {
        const obj = {
            type: UserAction.CLEAR_COMPLETED,
        };
        expect(clearCompletedTodo()).toMatchObject(obj);
    });

    it(' toggle all todos, return an action object { type, payload }', () => {
        const objChecked = {
            type: UserAction.TOGGLE,
            payload: { checked: true },
        };
        const objUnchecked = {
            type: UserAction.TOGGLE,
            payload: { checked: false },
        };
        expect(toggleAll(true)).toMatchObject(objChecked);
        expect(toggleAll(false)).toMatchObject(objUnchecked);
    });
});
