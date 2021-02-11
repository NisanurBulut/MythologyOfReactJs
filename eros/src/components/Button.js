import React from 'react';
import PropTypes from 'prop-types';
import { HiHeart, HiOutlineHeart } from 'react-icons/all';
const Button = ({ color, onClick, showAdd }) => {

  return (
<button onClick={onClick}>
        {showAdd ? <HiHeart className="" size={35} /> :
        <HiOutlineHeart className="" size={35} />}
      </button>
  );
};
Button.defaultProps = {
  color: 'steelblue',
};
Button.prototype = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick:PropTypes.func
};
export default Button;
