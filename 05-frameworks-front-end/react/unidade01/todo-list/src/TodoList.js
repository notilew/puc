import React, { Component } from 'react';
import ProtoTypes from 'prop-types';
import { TodoListItem } from './TodoListItem';

export class TodoList extends Component {
    state = {
        title: '',
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

    componentDidMount() {
        this.setState({ title: 'My To Do List'});
    }

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
            <div>
                <h2>{this.state.title}</h2>
                <ul>
                    {this.state.items.map(item => (
                        <TodoListItem key={item.id} onToggleCompleted={handleOnToggleCompleted} {...item} />)
                    )}
                </ul>
            </div>
        );
    }

}

TodoList.propTypes = {
    title: ProtoTypes.string,
    items: ProtoTypes.array,
    componentDidMount: ProtoTypes.func,
    render: ProtoTypes.func
};