import { connect } from 'react-redux';
import Content from '../content_connected';
import { mapStateToProps, mapDispatchToProps } from '../../../component_redux';
import {
    getFilteredTodoList, hasAllCompleted, isEmpty, getActiveCount,
} from '../../../selector';

jest.mock('../../../selector');
jest.mock('../../../component_redux');
jest.mock('react-redux', () => ({
    connect: jest.fn((mapStateToPropsx, mapDispatchToPropsx) => ReactComponent => ({
        mapStateToPropsx,
        mapDispatchToPropsx,
        ReactComponent,
    })),
}));

describe(' Connected Component Test', () => {
    it(' not called with outer mapStateToProps & mapDispatchToProps ', () => {
        expect(connect).not.toHaveBeenCalledWith(mapStateToProps, mapDispatchToProps);
    });
    it(' outer functions been called ', () => {
        const params = connect.mock.calls[0];
        params[0]({}); // func --> mapStateToProps()
        expect(getFilteredTodoList).toHaveBeenCalled();
        expect(hasAllCompleted).toHaveBeenCalled();
        expect(isEmpty).toHaveBeenCalled();
        expect(getActiveCount).toHaveBeenCalled();
    });
});
