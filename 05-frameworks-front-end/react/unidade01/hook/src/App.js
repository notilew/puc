import React from 'react';
import './App.css';
import { useWindowWidth } from './UseWindowWidth';

function App() {
    const width = useWindowWidth();

    return (
        <h1>Window Width is {width}</h1>
    );
}

export default App;
