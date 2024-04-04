// Counter.js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from './actions';

const Counter = ({ counter, increment, decrement, reset }) => {
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = {
  increment,
  decrement,
  reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
