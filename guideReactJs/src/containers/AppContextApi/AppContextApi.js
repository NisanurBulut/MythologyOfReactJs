import React, { PureComponent } from 'react';
import Navbar from '../../components/ContextApp/Navbar';
import BookList from '../../components/ContextApp/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import classes from './AppContextApi.css';
import ThemeToggle from '../../components/ContextApp/ThemeToggle';

class AppContextApi extends PureComponent {
  render() {
    return (
      <ThemeContextProvider>
        <AuthContextProvider>
          <div className={classes.main}>
            <Navbar></Navbar>
            <BookList></BookList>
            <ThemeToggle />
          </div>
        </AuthContextProvider>
      </ThemeContextProvider>
    );
  }
}

export default AppContextApi;
