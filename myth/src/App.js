import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import MythList from './containers/MythList';
import MythItem from './containers/MythItem';
function App() {
  return (
    <div className="App">
      <nav className="header">
        <NavLink to={"/"}></NavLink>
      </nav>
      <Switch>
        <Route path={'/'} exact component={MythList} />
        <Route path={'/myth/:myth'} exact component={MythItem} />
        <Redirect path={"/"}></Redirect>
      </Switch>
    </div>
  );
}

export default App;
