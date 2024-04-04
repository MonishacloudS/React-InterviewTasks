// Parent.js
import React, { useState } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';

const Parent = () => {
  const [sharedState, setSharedState] = useState('Initial Value');

  const handleStateChange = () => {
    setSharedState('New Value');
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Shared State: {sharedState}</p>
      <ChildA sharedState={sharedState} setSharedState={setSharedState} />
      <ChildB sharedState={sharedState} />
      <button onClick={handleStateChange}>Update State</button>
    </div>
  );
};

export default Parent;
