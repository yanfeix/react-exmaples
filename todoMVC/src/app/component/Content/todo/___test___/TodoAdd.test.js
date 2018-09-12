import React from 'react';
import { shallow } from 'enzyme';
import TodoAdd from '../TodoAdd';

describe(' TodoAdd Component ', () => {
    const mockFunc = jest.fn();
    const wrapper = shallow(
        <TodoAdd
            onEnterKeyPressed={mockFunc}
        />,
    );
    it(' TodoAdd rendered ', () => {
        expect(wrapper.find('input').props().type).toBe('text');
        expect(wrapper.find('input').props().placeholder).toBe('What needs to be done ? ');
        expect(wrapper.find('input').hasClass('text_input')).toBeTruthy();
    });
    it(' simulate an input text change event ', () => {
        const input = wrapper.find('input');
        const testingValue = 'Input a todo item here';
        input.simulate('change', { target: { value: testingValue } });
        expect((wrapper.state().todoValue)).toBe(testingValue);
    });
    it(' simulate a key press event ', () => {
        const input = wrapper.find('input');
        const { todoValue } = wrapper.state();
        input.simulate('keypress', { key: 'Enter' });
        console.log(`state->todoValue : ${todoValue}`);
        if (todoValue.length > 0) {
            expect(mockFunc).toHaveBeenCalledWith(todoValue);
            const clearedValue = wrapper.state().todoValue;
            expect(clearedValue).toBe(''); // because the clearInput method was called.
        } else {
            expect(mockFunc).not.toHaveBeenCalled();
        }
    });
});
