// App.js
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import MyComponent from './MyComponent';

const Task11 = () => {
  return (
    <div>
      <h1>My React App</h1>
      <ErrorBoundary>
        <MyComponent />
      </ErrorBoundary>
    </div>
  );
};

export default Task11;
