import React, {useState} from "react";

const CounterComponent = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div className="main">
            <h2>Task-2 State Management: Counter</h2>
            <h3>Counter: {count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default CounterComponent;