import AppCompleteGuide from './AppCompleteGuide/AppCompleteGuide';
import React, { PureComponent } from 'react';
import classes from '../containers/App.css';
import WithClass from '../hoc/WithClass';
import AppContextApi from '../containers/AppContextApi/AppContextApi';
import AppHooks from './AppHooks/AppHooks';
class App extends PureComponent {
  render() {
    return (
    //   <div className={classes.App}>
    //   <AppHooks></AppHooks>
    // </div>
     <div className={classes.App}>
       <AppContextApi></AppContextApi>
     </div>
        // <WithClass classes={classes.App}>
        //   <AppCompleteGuide appTitle="Guide App For ReactJs"/>
        // </WithClass>
    );
  }
}

export default App;
