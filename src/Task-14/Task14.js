// App.js
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const Home = React.lazy(() => import('./Home1'));
const About = React.lazy(() => import('./About1'));
const Contact = React.lazy(() => import('./Contact1'));

const Task14 = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" exact component={<Home/>} />
          <Route path="/about" component={<About/>} />
          <Route path="/contact" component={<Contact/>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Task14;
