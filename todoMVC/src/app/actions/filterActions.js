import { FilterAction } from '../constant';

function setFilterType(filterType) {
    return {
        type: FilterAction.SET_FILTER_TYPE,
        payload: filterType,
    };
}

export default setFilterType;
