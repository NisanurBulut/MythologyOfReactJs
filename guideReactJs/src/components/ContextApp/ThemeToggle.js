import React, { useContext } from 'react';
import { ThemeContext } from '../../containers/AppContextApi/contexts/ThemeContext';
import classes from '../../containers/AppContextApi/AppContextApi.css';
const ThemeToggle = () => {
  const {toggleTheme} = useContext(ThemeContext)
  return <button className={classes.toggledBtn} onClick={toggleTheme}>Toggle Theme</button>;
}

export default ThemeToggle;
