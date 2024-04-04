// ChildA.js
import React from 'react';

const ChildA = ({ sharedState, setSharedState }) => {
  const handleStateChange = () => {
    setSharedState('New Value from Child A');
  };

  return (
    <div>
      <h2>Child A</h2>
      <button onClick={handleStateChange}>Update State in Child A</button>
      <p>Shared State in Child A: {sharedState}</p>
    </div>
  );
};

export default ChildA;
