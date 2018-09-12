import React from 'react';
import { shallow } from 'enzyme';
import { Content } from '../index';
import * as L from '../../../actions';
import makeTodoItem from '../../../util';

jest.mock('../../../actions');

describe(' Content component ', () => {
    const mockProp = {
        dispatch: jest.fn(),
        filteredTodoList: [makeTodoItem('AAA'), makeTodoItem('BBB')],
        isAllCompleted: false,
        isVisible: false,
        activeCount: 10,
    };
    const initWrapper = () => shallow(
        <Content
            dispatch={mockProp.dispatch}
            filteredTodoList={mockProp.filteredTodoList}
            isAllCompleted={mockProp.isAllCompleted}
            isVisible={mockProp.isVisible}
            activeCount={mockProp.activeCount}
        />,
    );
    let wrapper = initWrapper();
    beforeEach(() => {
        wrapper = initWrapper();
    });

    it(' Wrapper rendered ', () => {
        console.log(wrapper.debug());
        expect(wrapper.find('TodoAdd')).toHaveLength(1);
        expect(wrapper.find('TodoList')).toHaveLength(1);
        expect(wrapper.find('TodoFilter')).toHaveLength(1);
    });
    it(' addTodo is invoked ', () => {
        const TodoAdd = wrapper.find('TodoAdd');
        const newTodoTxt = 'TODO AAAAAAAAAAA';
        TodoAdd.simulate('EnterKeyPressed', newTodoTxt);
        expect(L.addTodo).toHaveBeenCalledWith(newTodoTxt);
    });
    it(' activateTodo is invoked ', () => {
        const TodoList = wrapper.find('TodoList');
        const todo = mockProp.filteredTodoList[0];
        TodoList.simulate('ItemActivated', todo);
        expect(L.activateTodo).toHaveBeenCalledWith(todo);
    });
});
