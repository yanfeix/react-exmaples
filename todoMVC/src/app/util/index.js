import uuid from 'uuid';

function makeTodoItem(text) {
    return {
        id: uuid(),
        name: text,
        active: true,
        createdTime: Date.now(),
    };
}

export default makeTodoItem;
