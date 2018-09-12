export function getAfterAdded(data, todo) {
    return [...data, todo];
}

export function getAfterRemoved(data, todo) {
    return data.filter(elem => elem !== todo);
}

export function getAfterModfied(data, todo, newVal) {
    const item = data.find(el => el.id === todo.id);
    item.name = newVal;
    return [...data];
}

export function getAfterActivated(data, todo) {
    const item = data.find(el => el.id === todo.id);
    item.active = true;
    return [...data];
}

export function getAfterCompleted(data, todo) {
    const item = data.find(el => el.id === todo.id);
    item.active = false;
    return [...data];
}

export function getAfterClearCompleted(data) {
    return data.filter(el => el.active);
}

export function getAfterToggled(data, checked) {
    return data.map((el) => {
        const item = el;
        item.active = !checked;
        return item;
    });
}
