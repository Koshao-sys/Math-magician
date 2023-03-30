import PropTypes from 'prop-types';
import React from 'react';

function Display(props) {
  const { state } = props;
  return (
    <div className="DisplayArea">
      <p>{ state }</p>
    </div>
  );
}

Display.propTypes = {
  state: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      total: PropTypes.string,
      next: PropTypes.string,
      operation: PropTypes.string,
    }),
  ]).isRequired,
};

export default Display;
