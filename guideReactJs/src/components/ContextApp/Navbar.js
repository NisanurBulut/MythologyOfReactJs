import React, { Component } from 'react';
import classes from '../../containers/AppContextApi/AppContextApi.css';
import { ThemeContext } from '../../containers/AppContextApi/contexts/ThemeContext';
class Navbar extends Component {
  // consume to themecontext
  static contextType = ThemeContext;
  render() {
    console.log(this.context); // type olarak consume ettik ancak okurken context kullanıdğımıza dikkat et
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <nav
        className={classes.nav}
        style={{ background: theme.ui, color: theme.style }}
      >
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
