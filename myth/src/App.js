import logo from './logo.svg';
import styledApp from './App.css';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import MythList from './containers/MythList/MythList';
import MythItem from './containers/MythItem';
function App() {
  return (
    <div className="App">
      <nav className={styledApp.header}>
        <NavLink to={"/"}><b>Search</b></NavLink>
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
