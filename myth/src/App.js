import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import MythList from './containers/MythList';
function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Search</NavLink>
      </nav>
      <Switch>
        <Route path={'/'} exact component={MythList} />
        <Route path={'/myth/:myth'} exact component={MythList} />
        <Redirect path={"/"}></Redirect>
      </Switch>
    </div>
  );
}

export default App;
