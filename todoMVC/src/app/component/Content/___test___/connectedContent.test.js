import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import * as L from 'react-redux';
import { Content } from '../index';

jest.mock('../../../component_redux/content');
L.connect = jest.fn(callback => component => component);


const mockProps = {
    filteredTodoList: [],
    isVisible: false,
    isAllCompleted: false,
    activeCount: 10,
};

const mockStore = {
    dispatch: jest.fn(),
    state: {},
    subscribe: jest.fn(),
    getState: jest.fn(),
};

describe(' Connected Content Test', () => {
    it(' mapStateToProps is called. ', () => {
        const wrapper = mount(
            <Provider store={mockStore}>
                <Content
                    dispatch={mockStore.dispatch}
                    filteredTodoList={mockProps.filteredTodoList}
                    isVisible={mockProps.isVisible}
                    isAllCompleted={mockProps.isAllCompleted}
                    activeCount={mockProps.activeCount}
                />
            </Provider>,
        );
        // expect(C.mapStateToProps).toHaveBeenCalled();
        console.log(wrapper.debug());
    });
});
