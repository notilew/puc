import React from 'react';
import PropTypes from 'prop-types';

export function TodoListItem(props) {
    return (
        <li>
            <input
                type="checkbox"
                onChange={(event) => props.onToggleCompleted(props.id, event)}
            />
            <strong
                style={{ textDecoration: props.status === 'completed' ? 'line-through' : 'none' }}
            >
                {props.name}
            </strong> - {props.status}
        </li>
    );
}

TodoListItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.string,
    onToggleCompleted: PropTypes.func
};