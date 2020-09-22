import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {

    state = {
        isClockHidden: false
    };

    hideClock = () => {
        this.setState({ isClockHidden: true });
    }

    render() {
        if (this.state.isClockHidden) {
            return (
                <h1>Clock is Hidden</h1>
            );
        }

        return (
            <div>
                <Clock />
                <button onClick={this.hideClock}>Hide Clock</button>
            </div>
        );
    }

}

export default App;
