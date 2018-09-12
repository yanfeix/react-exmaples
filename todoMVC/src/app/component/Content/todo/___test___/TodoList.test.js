import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../TodoList';
import makeTodoItem from '../../../../util';

describe(' TodoList component ', () => {
    const mockParam = {
        toggleVisible: false,
        hasAllCompleted: false,
        dataSource: [makeTodoItem('TODO AA'), makeTodoItem('TODO BB')],
        onItemActivated: jest.fn(),
        onItemCompleted: jest.fn(),
        onItemModified: jest.fn(),
        onItemRemoved: jest.fn(),
        onToggleChanged: jest.fn(),
    };
    const initWrapper = () => shallow(
        <TodoList
            toggleVisible={mockParam.toggleVisible}
            hasAllCompleted={mockParam.hasAllCompleted}
            dataSource={mockParam.dataSource}
            onItemActivated={mockParam.onItemActivated}
            onItemCompleted={mockParam.onItemCompleted}
            onItemModified={mockParam.onItemModified}
            onItemRemoved={mockParam.onItemRemoved}
            onToggleChanged={mockParam.onToggleChanged}
        />,
    );

    let wrapper = initWrapper();

    beforeEach(() => {
        wrapper = initWrapper();
    });

    it(' render todo list', () => {
        expect(wrapper.find('div').hasClass('todo_list')).toBeTruthy();
        expect(wrapper.find('input')).toHaveLength(1);
        expect(wrapper.find('TodoItem')).toHaveLength(2);
    });
    it(' simulate activate event ', () => {
        const todoItem = wrapper.find('TodoItem').at(0);
        todoItem.simulate('activated', mockParam.dataSource[0]);
        const value = todoItem.props().todo;
        expect(mockParam.onItemActivated).toHaveBeenCalledWith(value);
    });
    it(' simulate completed event ', () => {
        const todoItem = wrapper.find('TodoItem').at(0);
        todoItem.simulate('completed', mockParam.dataSource[0]);
        const value = todoItem.props().todo;
        expect(mockParam.onItemCompleted).toHaveBeenCalledWith(value);
    });
    it(' simulate removed event', () => {
        const todoItem = wrapper.find('TodoItem').at(0);
        todoItem.simulate('removed', mockParam.dataSource[0]);
        const value = todoItem.props().todo;
        expect(mockParam.onItemRemoved).toHaveBeenCalledWith(value);
    });
    it(' simulate modified event', () => {
        const todoItem = wrapper.find('TodoItem').at(0);
        const newTxt = 'New todo used for Modified';
        todoItem.simulate('modified', mockParam.dataSource[0], newTxt);
        const value = todoItem.props().todo;
        expect(mockParam.onItemModified).toHaveBeenCalledWith(value, newTxt);
    });
    it(' toggleVisible set to false will lead a hidden checkbox ', () => {
        wrapper.setState({ toggleVisible: false });
        expect(wrapper.find('input').hasClass('hidden')).toBeTruthy();
        console.log(wrapper.debug());
    });
});
