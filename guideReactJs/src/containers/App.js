import AppCompleteGuide from './AppCompleteGuide/AppCompleteGuide';
import React, { PureComponent } from 'react';
import classes from '../containers/App.css';
import WithClass from '../hoc/WithClass';
import AppContextApi from '../containers/AppContextApi/AppContextApi';
class App extends PureComponent {
  render() {
    return (
     <div>
       <AppContextApi></AppContextApi>
     </div>
        // <WithClass classes={classes.App}>
        //   <AppCompleteGuide appTitle="Guide App For ReactJs"/>
        // </WithClass>
    );
  }
}

export default App;
