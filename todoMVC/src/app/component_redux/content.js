import {
    getFilteredTodoList, hasAllCompleted, isEmpty, getActiveCount,
} from '../selector';

function mapStateToProps(state) {
    return {
        filteredTodoList: getFilteredTodoList(state),
        isVisible: !isEmpty(state),
        isAllCompleted: hasAllCompleted(state),
        activeCount: getActiveCount(state),
    };
}

function mapActionsToProps(state) {
    return state;
}

export { mapActionsToProps, mapStateToProps };
