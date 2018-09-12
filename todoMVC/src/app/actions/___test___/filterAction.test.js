import setFilterType from '../filterActions';
import { FilterAction } from '../../constant';

it(' set filter type to return an action object { type, payload } ', () => {
    const filterType = 'someType';
    const result = {
        type: FilterAction.SET_FILTER_TYPE,
        payload: filterType,
    };
    expect(setFilterType(filterType)).toMatchObject(result);
});
