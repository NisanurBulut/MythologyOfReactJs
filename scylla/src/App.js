import AppCompleteGuide from './completeGuide/AppCompleteGuide/AppCompleteGuide';
import './App.css';
import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="App">
          <AppCompleteGuide/>
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
