import React from 'react'

function SimpleComponent ()  {
  return (
    <div className='Simple-Component-Container'>
        <h2>This is a Simple Component</h2>
        <p>This Component Demonstrates JSX Syntax and how to define and export functional Component in React </p>
        <label htmlFor='inputField'>Enter Your Name:</label>
        <input type='text' id='inputField' />
        <button>Click Me!</button>
    </div>
  )
}

export default SimpleComponent