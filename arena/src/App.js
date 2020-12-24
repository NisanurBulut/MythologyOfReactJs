import './App.css';
import AnimalList from './components/AnimalList';
import FormAddAnimal from './components/FormAddAnimal';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from "./components/NotFound";
function App() {
  return (
    <Router>
   <div>
     <Navbar/>
     <div className="container">
       <div className="row">
         <Switch>
     <Route exact path="/" component={AnimalList}></Route>
     <Route exact path="/add" component={FormAddAnimal}></Route>
     <Route  component={NotFound}></Route>
         </Switch>
         </div>
     </div>
   </div>
    </Router>
  );
}

export default App;
