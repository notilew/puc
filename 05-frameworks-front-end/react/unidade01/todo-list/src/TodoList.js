import React from 'react';
import { TodoListItem } from './TodoListItem';

const items = [{
    id: 1,
    name: 'Task 1',
    status: 'Pending'
}, {
    id: 2,
    name: 'Task 2',
    status: 'Pending'
}, {
    id: 3,
    name: 'Task 3',
    status: 'Pending'
}];

export function TodoList() {
    const handleShowTaskName = (name) => alert(name);
    
    return (
        <ul>
            {items.map(item => (
                <TodoListItem key={item.id} onShowTaskName={handleShowTaskName} {...item} />)
            )}
        </ul>
    );
}