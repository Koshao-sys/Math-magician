import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <nav className="nav-bar">
    <p>Math Magicians</p>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li>|</li>
      <li><Link to="/calculator">Calculator</Link></li>
      <li>|</li>
      <li><Link to="/quotes">Quotes</Link></li>
    </ul>
  </nav>
);

export default Nav;
