import React from 'react';
import { shallow } from 'enzyme';
import EditableLabel from '../EditableLabel';

describe(' <EditableLabel />', () => {
    const mockParams = {
        labelStyleClass: '',
        inputStyleClass: '',
        text: 'Working on Jest Unit Testing',
        onDataChanged: jest.fn(),
    };

    const initWrapper = () => shallow(
        <EditableLabel
            labelClassName={mockParams.labelStyleClass}
            inputClassName={mockParams.inputStyleClass}
            text={mockParams.text}
            onDataChanged={mockParams.onDataChanged}
        />,
    );


    let wrapper = initWrapper();

    beforeEach(() => {
        wrapper = initWrapper();
    });

    it(' render a <span> ', () => {
        const span = wrapper.find('span');
        expect(span).toHaveLength(1);
    });

    it(' double click the <span> ', () => {
        const span = wrapper.find('span');
        span.simulate('dblclick');
        expect(wrapper.find('input')).toHaveLength(1);
    });

    it(' press enter on the input box ', () => {
        const span = wrapper.find('span');
        span.simulate('dblclick');

        const input = wrapper.find('input');
        input.simulate('focus');
        input.simulate('change', { currentTarget: { value: 'Changed---Value' } });
        console.log(wrapper.debug());
        input.simulate('keypress', { key: 'Enter' }); // press ENTER
        console.log(wrapper.debug());
        expect(wrapper.find('span').text()).toBe('Changed---Value');
    });
});
