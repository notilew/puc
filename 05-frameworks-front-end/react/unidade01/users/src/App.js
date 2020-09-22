import React, { Component } from 'react';
import Users from './Users';
import './App.css';

class App extends Component {

    state = {
        searchForUser: ''
    };

    render() {
        const handleFormSubmit = (event) => {
            event.preventDefault();
            
            const inputValue = document.getElementById('search-input').value;

            this.setState({
                searchForUser: inputValue
            });
        };

        return (
            <div>
                <form onSubmit={handleFormSubmit}>
                    <input id="search-input" placeholder="Search for User" />
                    <button>Search</button>
                </form>

                <Users searchFor={this.state.searchForUser} />
            </div>
        );
    }

}

export default App;
