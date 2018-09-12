import { saveToLocalStorage } from '../../localStorage';
import { UserAction } from '../../constant';
import localStorager from '../localStorager';

jest.mock('../../localStorage');

describe(' Local Storager', () => {
    it(' save to local storage if the action was met ', () => {
        const actionTypeArr = Object.values(UserAction);

        const store = {
            getState: jest.fn(() => ({
                todoList: [],
            })),
        };

        const next = jest
            .fn(action => action)
            .mockReturnValue('LOCAL_STORAGE');

        actionTypeArr.forEach((type) => {
            const action = {
                type,
                payload: {},
            };

            expect(localStorager(store)(next)(action)).toBe('LOCAL_STORAGE');
            expect(saveToLocalStorage).toHaveBeenCalled();
            expect(store.getState).toHaveBeenCalled();
        });
    });
});
