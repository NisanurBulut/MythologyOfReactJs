import logo from './logo.svg';
import Person from './completeGuide/Person/Person';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person name="nisanur" number="29"/>
      <Person name="Nisanur" number="7">
        <h2>Im doing practise on React</h2>
      </Person>
    </div>
  );
}

export default App;
