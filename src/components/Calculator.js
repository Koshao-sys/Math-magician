import React from 'react';
import './Calculator.css';
import Display from './DisplayCalc';
import KeyArea from './KeyArea';

function Calculator() {
  return (
    <div className="Calculator">
      <Display />
      <KeyArea />
    </div>
  );
}

export default Calculator;
