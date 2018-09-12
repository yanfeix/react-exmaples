import React from 'react';
import { shallow } from 'enzyme';
import uuid from 'uuid';
import TodoItem from '../TodoItem';

describe(' TodoItem Component ', () => {
    const mockProps = {
        todo: {
            id: uuid(),
            name: 'Go to the bookstore',
            active: true,
            createdTime: Date.now(),
        },
        onActivated: jest.fn(),
        onCompleted: jest.fn(),
        onRemoved: jest.fn(),
        onModified: jest.fn(),
    };

    const initWrapper = () => shallow(
        <TodoItem
            todo={mockProps.todo}
            onActivated={mockProps.onActivated}
            onCompleted={mockProps.onCompleted}
            onRemoved={mockProps.onRemoved}
            onModified={mockProps.onModified}
        />,
    );

    let wrapper = initWrapper();

    beforeEach(() => {
        wrapper = initWrapper();
    });
    it(' component rendered ', () => {
        expect(wrapper.find('li')).toHaveLength(1);
        expect(wrapper.find('input')).toHaveLength(1);
        expect(wrapper.find('button')).toHaveLength(1);
        expect(wrapper.find('EditableLabel')).toHaveLength(1);
    });
    it(' <li> mouse leave/enter events captured ', () => {
        const li = wrapper.find('li');
        li.simulate('mouseEnter'); // mouse enter, to show close button
        expect(wrapper.state().closeBtnVisible).toBeTruthy();

        li.simulate('mouseLeave'); // mouse leave, to hide close button
        expect(wrapper.state().closeBtnVisible).toBeFalsy();
    });
    it(' checkbox change and complete or activate a todo', () => {
        const checkbox = wrapper.find('input');

        checkbox.simulate('change', { currentTarget: { checked: true } });
        expect(mockProps.onCompleted).toHaveBeenCalled();

        checkbox.simulate('change', { currentTarget: { checked: false } });
        expect(mockProps.onActivated).toHaveBeenCalled();
    });
    it(' EditableLabel trigger data change ', () => {
        const editableLabel = wrapper.find('EditableLabel');

        console.log(editableLabel.debug());
        console.log(editableLabel.props().text);

        const newTxt = 'THIS IS SIMULATED VALUE.';
        const { todo } = wrapper.instance().props; // using instance() for stateful component
        editableLabel.simulate('DataChanged', newTxt);

        expect(mockProps.onModified).toHaveBeenCalledWith(todo, newTxt);
    });
    it(' Remove button clicked ', () => {
        wrapper.find('li').simulate('mouseEnter'); // mouse enter to show the close button
        const closeBtn = wrapper.find('button');
        closeBtn.simulate('click');
        expect(mockProps.onRemoved).toHaveBeenCalledWith(mockProps.todo);
    });
});
