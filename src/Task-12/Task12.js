// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import HomePage from './HomePage';
import Login from './Login';
import Dashboard from './Dashboard';

const Task12 = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" component={<HomePage/>} />
          <Route path="/login" component={<Login/>} />
          <PrivateRoute path="/dashboard" component={<Dashboard/>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default Task12;
