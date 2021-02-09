import React, { Component, useContext } from 'react';
import classes from '../../containers/AppContextApi/AppContextApi.css';
import { ThemeContext } from '../../containers/AppContextApi/contexts/ThemeContext';
import { AuthContext } from '../../containers/AppContextApi/contexts/AuthContext';

const Navbar = () => {
  const { isLightTheme, light, dark }=useContext(ThemeContext); // destructing
  const theme = isLightTheme ? light : dark;
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  return (
    <nav
      className={classes.nav}
      style={{ background: theme.ui, color: theme.style }}
    >
      <h1>Context App</h1>
      <div onClick={toggleAuth}>{isAuthenticated ? 'Logged in' : 'Logged out'}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
