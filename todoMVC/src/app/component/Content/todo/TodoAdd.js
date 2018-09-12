import React from 'react';
import PropTypes from 'prop-types';
import style from '../index.css';

class TodoAdd extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todoValue: '',
        };

        this.updateState = this.updateState.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    updateState(event) {
        this.setState({
            todoValue: event.target.value,
        });
    }

    clearInput() {
        this.setState({
            todoValue: '',
        });
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            const { todoValue } = this.state;
            const { onEnterKeyPressed } = this.props;
            if (todoValue.length > 0) {
                onEnterKeyPressed(todoValue);
                this.clearInput();
            }
        }
    }

    render() {
        const { todoValue } = this.state;

        return (
            <div className={style.todo_add}>
                <input
                    className={style.text_input}
                    type="text"
                    placeholder="What needs to be done ? "
                    value={todoValue}
                    onChange={this.updateState}
                    onKeyPress={this.handleKeyPress}
                />
                <hr />
            </div>
        );
    }
}

TodoAdd.propTypes = {
    onEnterKeyPressed: PropTypes.func.isRequired,
};


export default TodoAdd;
