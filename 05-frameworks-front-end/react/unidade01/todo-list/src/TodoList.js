import React from 'react';
import { TodoListItem } from './TodoListItem';

export class TodoList extends React.Component {
    state = {
        items: [{
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
        }]
    };

    render() {
        const handleOnToggleCompleted = (taskId, event) => {
            this.setState({
                items: this.state.items.map(task => {
                    if (task.id === taskId) {
                        return { ...task, status: event.target.checked ? 'completed' : 'pending' };
                    }

                    return task;
                })
            });
        };

        return (
            <ul>
                {this.state.items.map(item => (
                    <TodoListItem key={item.id} onToggleCompleted={handleOnToggleCompleted} {...item} />)
                )}
            </ul>
        );
    }

}