import AppCompleteGuide from './AppCompleteGuide/AppCompleteGuide';
import React, { PureComponent } from 'react';
import classes from '../containers/App.css';
import WithClass from '../hoc/WithClass';
import AppContextApi from '../containers/AppContextApi/AppContextApi';
import AppHooks from './AppHooks/AppHooks';
import { Tab, Tabs } from 'react-bootstrap';
import * as bs from 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 1,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key) {
    console.log('selected' + key);
    this.setState({ key: key });
  }

  render() {
    console.log(this.state.key);

    return (
      <div className={classes.App}>
        <Tabs activeKey={this.state.key} onSelect={this.handleSelect}>
          <Tab
            eventKey={1}
            title="Using Context Api"
            className={!(this.state.key == 1) ? bs['d-none'] : ''}
          >
            <AppContextApi></AppContextApi>
          </Tab>
          <Tab
            eventKey={2}
            title="Using Hooks"
            className={!(this.state.key == 2) ? bs['d-none'] : ''}
          >
            <AppHooks></AppHooks>
          </Tab>
          <Tab
            eventKey={3}
            title="Using Components"
            className={!(this.state.key == 3) ? bs['d-none'] : ''}
          >
            <WithClass classes={classes.App}>
              <AppCompleteGuide appTitle="Guide App For ReactJs" />
            </WithClass>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
