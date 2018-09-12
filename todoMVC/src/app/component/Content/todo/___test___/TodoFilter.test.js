import React from 'react';
import { shallow } from 'enzyme';
import TodoFilter from '../TodoFilter';
import { OpType } from '../../../../constant';

describe(' Todo Filter ', () => {
    const mockParam = {
        visible: true,
        activeCount: 10,
        onFilterPerformed: jest.fn(),
        onClearCompleted: jest.fn(),
    };
    const initWrapper = () => shallow(
        <TodoFilter
            visible={mockParam.visible}
            activeCount={mockParam.activeCount}
            onFilterPerformed={mockParam.onFilterPerformed}
            onClearCompleted={mockParam.onClearCompleted}
        />,
    );

    let wrapper = initWrapper();
    beforeEach(() => {
        wrapper = initWrapper();
    });

    it(' render todo filter component ', () => {
        expect(wrapper.find('span').text()).toBe(`${mockParam.activeCount} items left`);
        expect(wrapper.find('ButtonLink')).toHaveLength(3);
        expect(wrapper.find('ButtonLink').at(1).props().text).toBe('Active');
        expect(wrapper.find('button')).toHaveLength(1);
        expect(wrapper.find('button').text()).toBe('Clear completed');
    });
    it(' simulate ClearCompleted button clicked event ', () => {
        const ccButton = wrapper.find('button');
        console.log(wrapper.debug());
        ccButton.simulate('click');
        expect(mockParam.onClearCompleted).toHaveBeenCalledWith(OpType.CLEAR_COMPLETED);
    });
    it(' simulate filter action ', () => {
        const buttonLinks = wrapper.find('ButtonLink');
        buttonLinks.forEach((link) => {
            const { filterType } = link.props();
            link.simulate('click', filterType);
            console.log(link.debug());
            expect(mockParam.onFilterPerformed).toHaveBeenCalledWith(filterType);
        });
    });
    it(' hide the component ', () => {
        wrapper.setProps({ visible: false });
        console.log(wrapper.debug());
        expect(wrapper.find('div').hasClass('hidden')).toBeTruthy();
    });
});
