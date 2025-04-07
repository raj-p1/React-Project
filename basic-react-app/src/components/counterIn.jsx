import React, { useState } from 'react'


function CounterIn() {

    const [counter, setCounter] = useState(0)
    const addValue = () => {
        //setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)

        //COunter Interview Question using callback function here it increments with each block
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
        console.log( counter)

    }
    const removeValue = () => {
        setCounter(counter - 1)

    }

    return (
        <>
            <h1>React Project INT || RP</h1>
            <h2>Counter value: {counter}</h2>

            <button onClick={addValue}>Add Value: </button>
            <br />
            <button onClick={removeValue}>Remove Value: </button>
        </>
    )
}

export default CounterIn