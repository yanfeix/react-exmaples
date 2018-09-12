import { isEmpty, getActiveCount, hasAllCompleted, getFilteredTodoList } from '../todoSelector';
import { FilterType } from '../../constant';

describe(' test on todo selectors ', () => {
    it(' the todo list is empty ', () => {
        const mockParams = {
            todoList: [],
        };
        /* resultFunc is the second parameter of createSelector,
         * so a mocked parameter can be passed.
         */
        const empty = isEmpty.resultFunc(mockParams.todoList);
        expect(empty).toBeTruthy();
    });

    it(' the todo list is not empty', () => {
        const mockParams = {
            todoList: [{}, {}],
        };
        const empty = isEmpty.resultFunc(mockParams.todoList);
        expect(empty).toBeFalsy();
    });

    it(' get the active count of a todo list', () => {
        const mockParams = {
            todoList: [
                { active: false },
                { active: true },
                { active: true },
            ],
        };
        const count = getActiveCount.resultFunc(mockParams.todoList);
        expect(count).toBe(2);
    });

    it(' all todos are completed ', () => {
        const mockParams = {
            todoList: [
                { active: false },
                { active: false },
                { active: false },
            ],
        };

        const completed = hasAllCompleted.resultFunc(mockParams.todoList);
        expect(completed).toBeTruthy();
    });

    it(' get filtered todo list ', () => {
        const mockParams = {
            todoList: [
                { name: 'AA', active: false },
                { name: 'BB', active: true }, // active todos
                { name: 'CC', active: false },
            ],
            filterType: FilterType.ACTIVE,
        };
        const expectedResult = mockParams.todoList.filter(e => e.active); // active todos
        const result = getFilteredTodoList.resultFunc(mockParams.todoList, mockParams.filterType);
        expect(result).toMatchObject(expectedResult);
    });
});
