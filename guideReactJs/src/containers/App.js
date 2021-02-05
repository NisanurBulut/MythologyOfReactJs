import AppCompleteGuide from './AppCompleteGuide/AppCompleteGuide';
import classes from '../containers/App.css';
import React, { PureComponent } from 'react';
import WithClass from '../../hoc/WithClass';

class App extends PureComponent {
  render() {
    return (
        <WithClass classes={classes.App}>
          <AppCompleteGuide appTitle="Guide App For ReactJs"/>
        </WithClass>
    );
  }
}

export default App;
