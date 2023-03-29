import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/quotes';
import './index.css';
import Home from './components/Home';

function App() {
  return (
    <>
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </>
  );
}

export default App;
