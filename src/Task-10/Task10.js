import React, { useState, useMemo, useCallback } from 'react';

const Task10 = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);


  const expensiveOperation = (value) => {
    console.log('Performing expensive operation...');
   
    let result = value.toUpperCase();
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result;
  };

  // Memoize the expensive operation using useMemo
  const memoizedExpensiveOperation = useMemo(() => expensiveOperation(inputValue), [inputValue]);

  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Add item to the list
  const addItem = useCallback(() => {
    setItems([...items, memoizedExpensiveOperation]);
  }, [items, memoizedExpensiveOperation]);

  return (
    <div>
      <h2>Task 10 - Performance Optimization</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={addItem}>Add Item</button>
      <div>
        <h3>List of Items</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Computed Value</h3>
        <p>{memoizedExpensiveOperation}</p>
      </div>
      <div>
        <h3>Count</h3>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </div>
    </div>
  );
};

export default Task10;
