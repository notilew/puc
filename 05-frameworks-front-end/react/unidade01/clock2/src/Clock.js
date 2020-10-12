import React, { useState, useEffect } from 'react';

function Clock() {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timerId);
        }
    });
    
    return (
        <p>{date.toLocaleTimeString()}</p>
    );

}

export default Clock;