import AppCompleteGuide from './AppCompleteGuide/AppCompleteGuide';
import classes from '../containers/App.css';
import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
        <div className={classes.App}>
          <AppCompleteGuide/>
        </div>
    );
  }
}

export default App;
