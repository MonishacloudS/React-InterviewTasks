import React, { useState } from 'react';

const Task13 = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const handleDelete = (index) => {
    // Optimistically update UI state
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);

    // Send request to server to delete item
    fetch(`api/deleteItem/${index}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete item');
        }
        // Server request successful, do nothing
      })
      .catch((error) => {
        // Revert optimistic UI update on failure
        setItems(items);
        alert(error.message);
      });
  };

  return (
    <div>
      <h2>Task 13 - Optimistic UI Updates</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task13;
