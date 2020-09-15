import React from 'react';
import PropTypes from 'prop-types';

export function TodoListItem(props) {
    return (
        <li>
            <strong>{props.name}</strong> - {props.status}
            <button onClick={() => props.onShowTaskName(props.name)}>
                Show Task Name
            </button>
        </li>
    );
}

TodoListItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.string,
    onShowTaskName: PropTypes.func
};