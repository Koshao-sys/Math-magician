import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Calculator.css';

function Display() {
  return (
    <div className="DisplayArea">
      <p>0</p>
    </div>
  );
}

function KeyArea() {
  const Items = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  return (
    <div className="key-area">
      {Items.map((Item, ind) => (
        <button key={uuidv4()} id={`btn-${ind}`} type="submit" className="key-btn">{Item}</button>
      ))}
    </div>
  );
}

function Calculator() {
  return (
    <div className="Calculator">
      <Display />
      <KeyArea />
    </div>
  );
}

export default Calculator;
