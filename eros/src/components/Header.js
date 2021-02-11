import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAddContact }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button
        color={showAddContact ? 'green' : 'red'}
        text={showAddContact ? 'close' : 'open'}
        onClick={onAdd}
      />
    </div>
  );
};
Header.defaultProps = {
  title: 'Love Tracker',
};

Header.prototype = {
  title: PropTypes.string.isRequired,
};
// const headerStyle= {
//    color:'red',
//    backgroundColor:'black'
// }
export default Header;
