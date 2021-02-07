import React, { useContext } from 'react';
import { ThemeContext } from '../../containers/AppContextApi/contexts/ThemeContext';

const ThemeToggle = () => {
  const {toggleTheme} = useContext(ThemeContext)
  return <button onClick={toggleTheme}>Toggle Theme</button>;
}

export default ThemeToggle;
