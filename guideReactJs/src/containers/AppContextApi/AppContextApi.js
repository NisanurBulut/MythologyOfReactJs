import React, { PureComponent } from 'react';
import Navbar from '../../components/ContextApp/Navbar';
import BookList from '../../components/ContextApp/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthontextProvider from './contexts/AuthContext';
import classes from './AppContextApi.css';
import ThemeToggle from '../../components/ContextApp/ThemeToggle';

class AppContextApi extends PureComponent {
  render() {
    return (
      <ThemeContextProvider>
        <AuthontextProvider>
          <div className={classes.main}>
            <Navbar></Navbar>
            <BookList></BookList>
            <ThemeToggle />
          </div>
        </AuthontextProvider>
      </ThemeContextProvider>
    );
  }
}

export default AppContextApi;
