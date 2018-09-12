const KEY_TODO_LIST = 'KEY_TODO_LIST';

function readFromLocalStorage() {
    const jsonString = localStorage.getItem(KEY_TODO_LIST);
    if (jsonString) {
        return JSON.parse(jsonString);
    }
    return [];
}

function saveToLocalStorage(todoList) {
    localStorage.setItem(KEY_TODO_LIST, JSON.stringify(todoList));
}

export { readFromLocalStorage, saveToLocalStorage };
