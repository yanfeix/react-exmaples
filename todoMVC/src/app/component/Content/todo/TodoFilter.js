import React from 'react';
import PropTypes from 'prop-types';
import { ButtonLink } from '../../Common';
import { FilterType, OpType } from '../../../constant';
import style from '../index.css';

class TodoFilter extends React.Component {
    constructor(props) {
        super(props);
        this.handleActionBtnClick = this.handleActionBtnClick.bind(this);
        this.handleClearBtnClick = this.handleClearBtnClick.bind(this);
    }

    handleActionBtnClick(filterType) {
        const { onFilterPerformed } = this.props;
        onFilterPerformed(filterType);
    }

    handleClearBtnClick() {
        const { onClearCompleted } = this.props;
        onClearCompleted(OpType.CLEAR_COMPLETED);
    }

    render() {
        const { visible, activeCount } = this.props;
        const compStyle = visible ? style.todo_filter : style.hidden;
        const activeCountDescrip = `${activeCount} items left`;
        return (
            <div className={compStyle}>
                <span>{ activeCountDescrip }</span>
                <ul>
                    <li>
                        <ButtonLink text="All" onClick={this.handleActionBtnClick} filterType={FilterType.ALL} />
                    </li>
                    <li>
                        <ButtonLink text="Active" onClick={this.handleActionBtnClick} filterType={FilterType.ACTIVE} />
                    </li>
                    <li>
                        <ButtonLink text="Completed" onClick={this.handleActionBtnClick} filterType={FilterType.COMPLETED} />
                    </li>
                </ul>
                <button type="button" onClick={this.handleClearBtnClick}>Clear completed</button>
            </div>
        );
    }
}

TodoFilter.propTypes = {
    visible: PropTypes.bool.isRequired,
    activeCount: PropTypes.number.isRequired,
    onFilterPerformed: PropTypes.func.isRequired,
    onClearCompleted: PropTypes.func.isRequired,
};

export default TodoFilter;
