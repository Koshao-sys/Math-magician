import React from 'react';
import './Calculator.css';
import KeyArea from './KeyArea';
import Quotes from './quotes';

function Calculator() {
  return (
    <div className="calc-container">
      <Quotes />
      <KeyArea />
    </div>
  );
}

export default Calculator;
