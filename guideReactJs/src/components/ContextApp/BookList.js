import React, {useContext } from 'react';
import classes from '../../containers/AppContextApi/AppContextApi.css';
import { ThemeContext } from '../../containers/AppContextApi/contexts/ThemeContext';

const BookList = () => {
  const {isLightTheme, light, dark}=useContext(ThemeContext)
  const theme = isLightTheme ? light : dark;
  return ( <div className={classes.bookList} style={{color:theme.style,background:theme.bg}}>
    <ul>
      <li style={{background:theme.ui}}>Harry Potter</li>
      <li style={{background:theme.ui}}>Yüzüklerin Efendisi</li>
      <li style={{background:theme.ui}}>Yerdeniz Büyücüsü</li>
    </ul>
  </div> );
}

export default BookList;
