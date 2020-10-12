import React, { Component } from 'react';

class Clock extends Component {

    state = {
        date: new Date()
    };

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({ date: new Date() });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    
    render() {
        return (
            <p>{this.state.date.toLocaleTimeString()}</p>
        );
    }

}

export default Clock;