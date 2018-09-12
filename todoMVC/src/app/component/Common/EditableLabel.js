import React from 'react';
import PropTypes from 'prop-types';

class EditableLabel extends React.Component {
    constructor(props) {
        super(props);
        const { text } = this.props;
        this.state = {
            editing: false,
            text,
        };

        this.handleLabelClicked = this.handleLabelClicked.bind(this);
        this.handleTextChanged = this.handleTextChanged.bind(this);
        this.handleInputLostFocus = this.handleInputLostFocus.bind(this);
        this.handleKeyPressed = this.handleKeyPressed.bind(this);
        this.raiseDataChange = this.raiseDataChange.bind(this);
    }

    handleLabelClicked() {
        this.setState({
            editing: true,
        });
    }

    handleTextChanged(event) {
        this.setState({
            text: event.currentTarget.value,
        });
    }

    handleInputLostFocus() {
        this.setState({ editing: false });
    }

    handleKeyPressed(event) {
        if (event.key === 'Enter') {
            this.handleInputLostFocus();
            this.raiseDataChange();
        }
    }

    raiseDataChange() {
        const { text } = this.state;
        const { onDataChanged } = this.props;
        onDataChanged(text);
    }

    render() {
        const { labelClassName, inputClassName } = this.props;
        const { editing, text } = this.state;

        if (editing) {
            return (
                <input
                    type="text"
                    className={inputClassName}
                    onChange={this.handleTextChanged}
                    onBlur={this.handleInputLostFocus}
                    onKeyPress={this.handleKeyPressed}
                    value={text}
                    autoFocus
                />
            );
        }
        return <span className={labelClassName} onDoubleClick={this.handleLabelClicked}>{ text }</span>;
    }
}

EditableLabel.propTypes = {
    text: PropTypes.string.isRequired,
    labelClassName: PropTypes.string.isRequired,
    inputClassName: PropTypes.string.isRequired,
    onDataChanged: PropTypes.func.isRequired,
};


export default EditableLabel;
