// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the Home page!</p>
      <button onClick={handleClick}>Go to Contact</button>
    </div>
  );
};

export default Home;
