import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import style from '../index.css';

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.handleToggleChanged = this.handleToggleChanged.bind(this);
        this.handleActivated = this.handleActivated.bind(this);
        this.handleCompleted = this.handleCompleted.bind(this);
        this.handleRemoved = this.handleRemoved.bind(this);
        this.handleModified = this.handleModified.bind(this);
    }

    handleActivated(value) {
        const { onItemActivated } = this.props;
        onItemActivated(value);
    }

    handleCompleted(value) {
        const { onItemCompleted } = this.props;
        onItemCompleted(value);
    }

    handleRemoved(value) {
        const { onItemRemoved } = this.props;
        onItemRemoved(value);
    }

    handleModified(todo, newTxt) {
        const { onItemModified } = this.props;
        onItemModified(todo, newTxt);
    }

    handleToggleChanged(event) {
        const { checked } = event.currentTarget;
        const { onToggleChanged } = this.props;
        onToggleChanged(checked);
    }

    render() {
        const { toggleVisible, hasAllCompleted, dataSource } = this.props;

        const toggleStyle = toggleVisible ? style.toggle_visible : style.hidden;

        const elemList = dataSource.map(item => (
            <TodoItem
                onActivated={this.handleActivated}
                onCompleted={this.handleCompleted}
                onRemoved={this.handleRemoved}
                onModified={this.handleModified}
                key={item.id}
                todo={item}
            />
        ));

        return (
            <div className={style.todo_list}>
                <input className={toggleStyle} type="checkbox" onChange={this.handleToggleChanged} checked={hasAllCompleted} />
                <ul>
                    {
                        elemList
                    }
                </ul>
            </div>
        );
    }
}

TodoList.propTypes = {
    toggleVisible: PropTypes.bool.isRequired,
    hasAllCompleted: PropTypes.bool.isRequired,
    dataSource: PropTypes.array.isRequired,
    onItemActivated: PropTypes.func.isRequired,
    onItemCompleted: PropTypes.func.isRequired,
    onItemModified: PropTypes.func.isRequired,
    onItemRemoved: PropTypes.func.isRequired,
    onToggleChanged: PropTypes.func.isRequired,
};


export default TodoList;
