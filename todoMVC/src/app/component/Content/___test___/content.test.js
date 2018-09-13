import React from 'react';
import { shallow } from 'enzyme';
import Content from '../content';
// import * as L from '../../../actions';
import makeTodoItem from '../../../util';

// jest.mock('../../../actions');

describe(' Content component ', () => {
    const mockProp = {
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
            actionAddTodo={jest.fn()}
            actionActivateTodo={jest.fn()}
            actionCompleteTodo={jest.fn()}
            actionRemoveTodo={jest.fn()}
            actionModifyTodo={jest.fn()}
            actionToggleAll={jest.fn()}
            actionSetFilterType={jest.fn()}
            actionClearCompletedTodo={jest.fn()}
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
        const { actionAddTodo } = wrapper.instance().props;
        expect(actionAddTodo).toHaveBeenCalledWith(newTodoTxt);
    });
    it(' activateTodo is invoked ', () => {
        const TodoList = wrapper.find('TodoList');
        const todo = mockProp.filteredTodoList[0];
        TodoList.simulate('ItemActivated', todo);
        const { actionActivateTodo } = wrapper.instance().props;
        expect(actionActivateTodo).toHaveBeenCalledWith(todo);
    });
});
