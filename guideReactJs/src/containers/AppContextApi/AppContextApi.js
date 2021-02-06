import React, { PureComponent } from 'react';
import Navbar from '../../components/ContextApp/Navbar'
import BookList from '../../components/ContextApp/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import classes from './AppContextApi.css';

class AppContextApi extends PureComponent {
  render() {
    return (
      <ThemeContextProvider>
       <div className={classes.main}>
       <Navbar></Navbar>
        <BookList></BookList>
       </div>
      </ThemeContextProvider>
    );
  }
}

export default AppContextApi;
