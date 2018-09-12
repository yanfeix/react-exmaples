import React from 'react';
import PropTypes from 'prop-types';

class ButtonLink extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { onClick, filterType } = this.props;
        onClick(filterType);
    }

    render() {
        const { text } = this.props;
        return (
            <a href="#" onClick={this.handleClick}>{ text }</a>
        );
    }
}

ButtonLink.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    filterType: PropTypes.string.isRequired,
};

export default ButtonLink;
