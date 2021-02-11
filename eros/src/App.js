import React, {useState} from 'react'
import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import Contacts from './components/Contacts';

function App() {
  const [contacts, setContacts]= useState([
    {
        id:1,
        text:'Furkan\'s birthday',
        day:'1 November',
        reminder:true
    }
]);
  return (
    <div className="App">
      {/* <header className="App-header">
        test
      </header> */}
      <div className='container'>
        <Header title='Eros'/>
        <Contacts contacts={contacts} />
      </div>
    </div>
  );
}

export default App;
