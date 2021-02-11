import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, text }) => {
  const onclick = () => {
      console.log('click');
  };
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};
Button.defaultProps = {
  color: 'steelblue',
};
Button.prototype = {
  text: PropTypes.string,
  color: PropTypes.string,
};
export default Button;
