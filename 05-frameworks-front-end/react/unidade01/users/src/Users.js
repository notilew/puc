import React, { Component } from 'react';

export default class Users extends Component {

    state = {
        usersList: ['Samuel Martins', 'Elon Musk', 'Steve Jobs'],
        givenPropIsAnUser: false
    };

    componentDidUpdate(prevProps) {
        if (prevProps.searchFor !== this.props.searchFor) {
            console.log('prop is changed!');
            if (this.state.usersList.includes(this.props.searchFor)) {
                this.setState({
                    givenPropIsAnUser: true
                });
            } else {
                this.setState({
                    givenPropIsAnUser: false
                });
            }
        }
    }

    render() {
        if (this.state.givenPropIsAnUser) {
            return (
                <h1>User is found.</h1>
            );
        } else {
            return (
                <h1>We don't have user yet.</h1>
            );
        }
    }

}