import React from 'react';
import PropTypes from 'prop-types';
import style from '../../style/index.css';
import { TodoAdd, TodoList, TodoFilter } from './todo';

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.handleItemAdded = this.handleItemAdded.bind(this);
        this.handleItemRemoved = this.handleItemRemoved.bind(this);
        this.handleItemActivated = this.handleItemActivated.bind(this);
        this.handleItemCompleted = this.handleItemCompleted.bind(this);
        this.handleItemModified = this.handleItemModified.bind(this);
        this.handleToggleChange = this.handleToggleChange.bind(this);
        this.handleClearCompleted = this.handleClearCompleted.bind(this);
        this.handleFilterAction = this.handleFilterAction.bind(this);
    }

    handleItemAdded(txt) {
        const { actionAddTodo } = this.props;
        actionAddTodo(txt);
    }

    handleItemActivated(todo) {
        const { actionActivateTodo } = this.props;
        actionActivateTodo(todo);
    }

    handleItemCompleted(todo) {
        const { actionCompleteTodo } = this.props;
        actionCompleteTodo(todo);
    }

    handleItemRemoved(todo) {
        const { actionRemoveTodo } = this.props;
        actionRemoveTodo(todo);
    }

    handleItemModified(todo, newTxt) {
        const { actionModifyTodo } = this.props;
        actionModifyTodo(todo, newTxt);
    }

    handleToggleChange(checked) {
        const { actionToggleAll } = this.props;
        actionToggleAll(checked);
    }

    handleFilterAction(filterType) {
        const { actionSetFilterType } = this.props;
        actionSetFilterType(filterType);
    }

    handleClearCompleted() {
        const { actionClearCompletedTodo } = this.props;
        actionClearCompletedTodo();
    }

    render() {
        const {
            filteredTodoList, isAllCompleted, isVisible, activeCount,
        } = this.props;

        return (
            <div className={style.center}>
                <TodoAdd
                    onEnterKeyPressed={this.handleItemAdded}
                />
                <TodoList
                    dataSource={filteredTodoList}
                    toggleVisible={isVisible}
                    hasAllCompleted={isAllCompleted}
                    onItemActivated={this.handleItemActivated}
                    onItemCompleted={this.handleItemCompleted}
                    onItemRemoved={this.handleItemRemoved}
                    onItemModified={this.handleItemModified}
                    onToggleChanged={this.handleToggleChange}
                />
                <TodoFilter
                    visible={isVisible}
                    activeCount={activeCount}
                    onClearCompleted={this.handleClearCompleted}
                    onFilterPerformed={this.handleFilterAction}
                />
            </div>
        );
    }
}

Content.propTypes = {
    filteredTodoList: PropTypes.array.isRequired,
    isAllCompleted: PropTypes.bool.isRequired,
    isVisible: PropTypes.bool.isRequired,
    activeCount: PropTypes.number.isRequired,
    actionAddTodo: PropTypes.func.isRequired,
    actionActivateTodo: PropTypes.func.isRequired,
    actionCompleteTodo: PropTypes.func.isRequired,
    actionRemoveTodo: PropTypes.func.isRequired,
    actionModifyTodo: PropTypes.func.isRequired,
    actionToggleAll: PropTypes.func.isRequired,
    actionSetFilterType: PropTypes.func.isRequired,
    actionClearCompletedTodo: PropTypes.func.isRequired,
};

export default Content;
