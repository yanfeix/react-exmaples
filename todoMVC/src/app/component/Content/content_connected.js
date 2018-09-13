import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import style from '../../style/index.css';
import { TodoAdd, TodoList, TodoFilter } from './todo';
import {
    getFilteredTodoList, hasAllCompleted, isEmpty, getActiveCount,
} from '../../selector';

import * as L from '../../actions';

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

function mapStateToProps(state) {
    return {
        filteredTodoList: getFilteredTodoList(state),
        isVisible: !isEmpty(state),
        isAllCompleted: hasAllCompleted(state),
        activeCount: getActiveCount(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actionAddTodo: (txt) => { dispatch(L.addTodo(txt)); },
        actionActivateTodo: (todo) => { dispatch(L.activateTodo(todo)); },
        actionCompleteTodo: (todo) => { dispatch(L.completeTodo(todo)); },
        actionRemoveTodo: (todo) => { dispatch(L.removeTodo(todo)); },
        actionModifyTodo: (todo, newTxt) => { dispatch(L.modifyTodo(todo, newTxt)); },
        actionToggleAll: (checked) => { dispatch(L.toggleAll(checked)); },
        actionSetFilterType: (filterType) => { dispatch(L.setFilterType(filterType)); },
        actionClearCompletedTodo: () => { dispatch(L.clearCompletedTodo()); },
    };
}

/*
 * This is a connected component. File is kept to compare with the other implementation.
 */
export default connect(mapStateToProps, mapDispatchToProps)(Content);
