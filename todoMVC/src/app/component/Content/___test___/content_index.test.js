import { connect } from 'react-redux';
import Content from '../index';
import { mapStateToProps, mapDispatchToProps } from '../../../component_redux/redux_content';

jest.mock('react-redux', () => ({
    connect: jest.fn((mapStateToPropsx, mapDispatchToPropsx) => ReactComponent => ({
        mapStateToPropsx,
        mapDispatchToPropsx,
        ReactComponent,
    })),
}));
jest.mock('../../../component_redux/redux_content');

describe(' Index Test', () => {
    it(' redux connect called with outer mapStateToProps & mapDispatchToProps ', () => {
        expect(connect).toHaveBeenCalledWith(mapStateToProps, mapDispatchToProps);
    });
});
