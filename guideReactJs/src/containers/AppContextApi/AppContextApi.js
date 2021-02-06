import React, { PureComponent } from 'react';
import Navbar from '../../components/ContextApp/Navbar'
import BookList from '../../components/ContextApp/BookList';
class AppContextApi extends PureComponent {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <BookList></BookList>
      </div>
    );
  }
}

export default AppContextApi;
