import { mapStateToProps } from '../index';
import * as L from '../../selector';
import makeTodoItem from '../../util';

jest.mock('../../selector');

describe(' Redux Applied to Content', () => {
    let initalData = {};
    beforeEach(() => {
        initalData = {
            filteredTodoList: [makeTodoItem('AA'), makeTodoItem('BB')],
            isVisible: true,
            isAllCompleted: false,
            activeCount: 1,
        };
        L.getFilteredTodoList = jest.fn()
            .mockReturnValue(initalData.filteredTodoList);
        L.isEmpty = jest.fn()
            .mockReturnValue(initalData.isVisible);
        L.hasAllCompleted = jest.fn()
            .mockReturnValue(initalData.isAllCompleted);
        L.getActiveCount = jest.fn()
            .mockReturnValue(initalData.activeCount);
    });
    it(' 4 selector functions are called ', () => {
        const state = {};
        const result = mapStateToProps(state);
        expect(L.getFilteredTodoList).toHaveBeenCalled();
        expect(L.isEmpty).toHaveBeenCalled();
        expect(L.hasAllCompleted).toHaveBeenCalled();
        expect(L.getActiveCount).toHaveBeenCalled();
        initalData.isVisible = false;
        expect(result).toMatchObject({ ...initalData });
    });
});
