import React, {useState} from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)

    const addValue = () => {
      if (counter > 19) {
        alert("You have reached the maximum value of 20");
        return;
      }
      setCounter(counter + 1);
    }
    const removeValue = () => {
      if (counter <= 0) {
        alert("You have reached the minimum value of 0");
        return;
      }
      setCounter(counter - 1);
      console.log("Counter value: ", counter);
    }
  
    return (
      <>
        <h1>React Project || RP</h1>
        <h2>Counter value: {counter}</h2>
  
        <button onClick={addValue}>Add Value: </button>
        <br />
        <button onClick={removeValue}>Remove Value: </button>
      </>
    );
}

export default Counter