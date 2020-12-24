import './App.css';
import AnimalList from './components/AnimalList';
import FormAddAnimal from './components/FormAddAnimal';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
   <div>
     <Navbar/>
     <div className="container">
       <div className="row">
     <Route exact path="/" component={AnimalList}></Route>
     <Route exact path="/add" component={FormAddAnimal}></Route>
         </div>
     </div>
   </div>
    </Router>
  );
}

export default App;
