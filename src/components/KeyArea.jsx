import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import calculate from '../logic/calculate';
import Display from './DisplayCalc';

const KeyArea = () => {
  const [objCalc, setObjCalc] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const InitiateClick = (e) => {
    const btn = e.target.textContent;
    const newState = calculate(objCalc, btn);
    setObjCalc(newState);
  };

  const { next, total } = objCalc;
  const Items = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  return (
    <div className="Calculator">
      <Display state={next || total || '0'} />
      <div className="key-area">
        {Items.map((Item, ind) => (
          <button key={uuidv4()} id={`btn-${ind}`} type="submit" className="key-btn" onClick={InitiateClick}>{Item}</button>
        ))}
      </div>
    </div>
  );
};

export default KeyArea;
