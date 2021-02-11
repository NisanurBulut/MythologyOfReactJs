import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        test
      </header> */}
      <div className='container'>
        <Header title='Eros'/>
        <Contacts />
      </div>
    </div>
  );
}

export default App;
