import { readFromLocalStorage, saveToLocalStorage } from '../index';

const KEY_TODO_LIST = 'KEY_TODO_LIST';

const dataString = `[
    {"id":"9da41427-5f29-4248-9f2d-8c5bea353d60","name":"Wake up in the morning","active":true,"createdTime":1536204513956},
    {"id":"ec74303a-1e08-445d-b669-697091d46cff","name":"Finish the todoMVC demo","active":true,"createdTime":1536204548717}
]`;

describe(' LocalStorage ', () => {
    it(' save todolist data to local storage ', () => {
        const todoList = JSON.parse(dataString);
        saveToLocalStorage(todoList);
        // Still working to mock localStorage
        const jsonString = localStorage.getItem(KEY_TODO_LIST);
        expect(JSON.stringify(todoList)).toBe(jsonString);
    });

    it(' read todo list { array } from the local storage ', () => {
        localStorage.setItem(KEY_TODO_LIST, dataString);
        expect(readFromLocalStorage()).toMatchObject(JSON.parse(dataString));
    });
});
