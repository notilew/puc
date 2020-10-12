import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
    return <h1>Home</h1>;
}

function Contact({ match }) {
    return <h1>Contact {match.params.name}</h1>;
}

function About() {
    return <h1>About</h1>;
}

function App() {
    return (
        <BrowserRouter>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact/Wellington">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>

            <Route path="/" component={Home} exact></Route>
            <Route path="/contact/:name" component={Contact}></Route>
            <Route path="/about" component={About}></Route>
        </BrowserRouter>
    );
}

export default App;
