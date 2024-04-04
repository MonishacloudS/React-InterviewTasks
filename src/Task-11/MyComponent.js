// MyComponent.js
import React from 'react';

const MyComponent = () => {
  // Simulating an error
  throw new Error('Error occurred in MyComponent');
  
  return(
    <div>
        <h2>Welcome to my page....!</h2>
        <p>This is my Component</p>
    </div>
  )
};

export default MyComponent;
