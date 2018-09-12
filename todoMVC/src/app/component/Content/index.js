import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import style from '../../style/index.css';
import { TodoAdd, TodoList, TodoFilter } from './todo';
import {
    getFilteredTodoList, hasAllCompleted, isEmpty, getActiveCount,
} from '../../selector';
//import { mapStateToProps } from '../../component_redux/content';
import {
    addTodo, removeTodo, modifyTodo,
    activateTodo, completeTodo, clearCompletedTodo,
    toggleAll, setFilterType,
} from '../../actions';

export class Content extends React.Component {
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
        const { dispatch } = this.props;
        console.log(txt);
        dispatch(addTodo(txt));
    }

    handleItemActivated(todo) {
        const { dispatch } = this.props;
        dispatch(activateTodo(todo));
    }

    handleItemCompleted(todo) {
        const { dispatch } = this.props;
        dispatch(completeTodo(todo));
    }

    handleItemRemoved(todo) {
        const { dispatch } = this.props;
        dispatch(removeTodo(todo));
    }

    handleItemModified(todo, newTxt) {
        const { dispatch } = this.props;
        dispatch(modifyTodo(todo, newTxt));
    }

    handleToggleChange(checked) {
        const { dispatch } = this.props;
        dispatch(toggleAll(checked));
    }

    handleFilterAction(filterType) {
        const { dispatch } = this.props;
        dispatch(setFilterType(filterType));
    }

    handleClearCompleted() {
        const { dispatch } = this.props;
        dispatch(clearCompletedTodo());
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

function mapStateToProps(state) {
    console.log('-------mapStateToProps---------');
    return {
        filteredTodoList: getFilteredTodoList(state),
        isVisible: !isEmpty(state),
        isAllCompleted: hasAllCompleted(state),
        activeCount: getActiveCount(state),
    };
}

Content.propTypes = {
    dispatch: PropTypes.func.isRequired,
    filteredTodoList: PropTypes.array.isRequired,
    isAllCompleted: PropTypes.bool.isRequired,
    isVisible: PropTypes.bool.isRequired,
    activeCount: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Content);
