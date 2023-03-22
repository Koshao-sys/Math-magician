import React from 'react';
import { v4 as uuidv4 } from 'uuid';

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

export default KeyArea;
