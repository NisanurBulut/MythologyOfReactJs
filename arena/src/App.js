import './App.css';
import AnimalList from './components/AnimalList';
import FormAddAnimal from './components/FormAddAnimal';
import Navbar from './components/Navbar';


function App() {
  return (
   <div>
     <Navbar/>
     <div className="container">
       <div className="row">
         <FormAddAnimal/>
         </div>
         <AnimalList/>
     </div>
   </div>

  );
}

export default App;
