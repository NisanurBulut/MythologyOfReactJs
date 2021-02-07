import React, { Component } from 'react';
import classes from '../../containers/AppContextApi/AppContextApi.css';
import { ThemeContext } from '../../containers/AppContextApi/contexts/ThemeContext';
import { AuthContext } from '../../containers/AppContextApi/contexts/AuthContext';
class Navbar extends Component {
  render() {
    // type olarak consume ettik ancak okurken context kullanıdğımıza dikkat et
    return (
      // consume to themecontext
      // bu şekilde fonksiyonel olarak erişmenin avantajı  multiple context tanımları olduğunda erişimin mümkün olmasıdır
      <AuthContext.Consumer>{(authContext) => {
          <ThemeContext.Consumer>{(themeContext) => {
              const { isAuthenticated, toggleAuth } = authContext;
              const { isLightTheme, light, dark } = themeContext;
              const theme = isLightTheme ? light : dark;
              return (
                <nav
                  className={classes.nav}
                  style={{ background: theme.ui, color: theme.style }}
                >
                  <h1>Context App</h1>
                  <div onClick={toggleAuth}>{isAuthenticated ? 'Logged in' : 'Log out'}</div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              );
            }}</ThemeContext.Consumer>;
        }}</AuthContext.Consumer>
    );
  }
}

export default Navbar;
