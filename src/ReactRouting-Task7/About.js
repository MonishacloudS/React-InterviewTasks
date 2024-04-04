// About.js
import React from 'react';
import { Route, Link } from 'react-router-dom';
import Team from './Team';
import Company from './Company';

const About = ({ match }) => {
  return (
    <div>
      <h2>About Page</h2>
      <p>About us...</p>
      <ul>
        <li>
          <Link to={`${match.url}/team`}>Team</Link>
        </li>
        <li>
          <Link to={`${match.url}/company`}>Company</Link>
        </li>
      </ul>
      <Route path={`${match.path}/team`} component={<Team/>} />
      <Route path={`${match.path}/company`} component={<Company/>} />
    </div>
  );
};

export default About;
