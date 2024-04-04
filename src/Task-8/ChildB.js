// ChildB.js
import React from 'react';

const ChildB = ({ sharedState }) => {
  return (
    <div>
      <h2>Child B</h2>
      <p>Shared State in Child B: {sharedState}</p>
    </div>
  );
};

export default ChildB;
