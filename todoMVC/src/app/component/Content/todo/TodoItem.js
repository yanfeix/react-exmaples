import React from 'react';
import PropTypes from 'prop-types';
import { EditableLabel } from '../../Common';
import style from '../index.css';


class TodoItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            closeBtnVisible: false,
        };

        this.handleCheck = this.handleCheck.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleTextEdited = this.handleTextEdited.bind(this);
    }

    handleCheck(event) {
        const { onCompleted, onActivated, todo } = this.props;
        if (event.currentTarget.checked) {
            onCompleted(todo);
        } else {
            onActivated(todo);
        }
    }

    handleBtnClick() {
        const { onRemoved, todo } = this.props;
        onRemoved(todo);
    }

    handleTextEdited(newTxt) {
        const { onModified, todo } = this.props;
        onModified(todo, newTxt);
    }

    handleMouseEnter() {
        this.setState({
            closeBtnVisible: true,
        });
    }

    handleMouseLeave() {
        this.setState({
            closeBtnVisible: false,
        });
    }

    render() {
        const { todo } = this.props;
        const { closeBtnVisible } = this.state;
        const txtStyle = todo.active ? style.active : style.completed;
        const btnStyle = closeBtnVisible ? style.todo : style.hidden;

        return (
            <li
                className={style.todo_item}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                <input type="checkbox" onChange={this.handleCheck} checked={todo.active === false} />
                <EditableLabel
                    labelClassName={txtStyle}
                    inputClassName={style.editable_box}
                    text={todo.name}
                    onDataChanged={this.handleTextEdited}
                />
                <button type="button" className={btnStyle} onClick={this.handleBtnClick}>X</button>
                <hr />
            </li>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onActivated: PropTypes.func.isRequired,
    onCompleted: PropTypes.func.isRequired,
    onRemoved: PropTypes.func.isRequired,
    onModified: PropTypes.func.isRequired,
};

export default TodoItem;
