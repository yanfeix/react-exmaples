import logger from '../logger';

describe(' Logger ', () => {
    it(' test logger', () => {
        const store = {
            getState: jest.fn(),
        };

        const next = jest
            .fn(action => action)
            .mockReturnValue('Hello');

        const action = {
            type: 'TEST',
            payload: {},
        };

        expect(logger(store)(next)(action)).toBe('Hello');
        expect(store.getState).toHaveBeenCalled();
        expect(next).toHaveBeenCalledWith(action);
    });
});
