import filterTypeReducer from '../filterTypeReducer';
import { FilterAction, FilterType } from '../../constant';

describe('Filter Type reducer.. ', () => {
    it(' filter type reducer is to return actions payload ', () => {
        const filterTypes = [FilterType.ALL, FilterType.ACTIVE, FilterType.COMPLETED];
        filterTypes.forEach((elem) => {
            const action = {
                type: FilterAction.SET_FILTER_TYPE,
                payload: elem,
            };
            expect(filterTypeReducer(FilterType.ALL, action)).toBe(action.payload);
        });
    });
});
