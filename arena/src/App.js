import './App.css';
import AnimalList from './components/AnimalList';
import FormAddAnimal from './components/FormAddAnimal';
import Navbar from './components/Navbar';


function App() {
  return (
   <div className="container">
     <Navbar/>
     <hr/>
     <FormAddAnimal/>
     <AnimalList/>
   </div>

  );
}

export default App;
