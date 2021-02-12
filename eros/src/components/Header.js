import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import {FormContext} from '../contexts/FormContext';
const Header = ({title}) => {
  const { isFormOpen, toggleForm } = useContext(FormContext);
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button showAdd={isFormOpen} onClick={toggleForm} />
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
