import React, { useState } from 'react';
import Clock from './Clock';
import './App.css';

function App() {

    const [isClockHidden, setIsClockHidden] = useState(false);

    if (isClockHidden) {
        return <h1>Clock is Hidden</h1>;
    }

    return (
        <div>
            <Clock />
            <button onClick={() => setIsClockHidden(true)}>Hide Clock</button>
        </div>
    );

}

export default App;
