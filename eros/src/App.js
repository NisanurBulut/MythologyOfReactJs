import React, { useState } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import Contacts from './components/Contacts';

function App() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      text: "Furkan's birthday",
      day: '1 November',
      reminder: true,
    },
  ]);
  const deleteContact = (id) => {
    setContacts(contacts.filter((a) => a.id !== id));
  };
  return (
    <div className="App">
      {/* <header className="App-header">
        test
      </header> */}
      <div className="container">
        <Header title="Eros" />
        {contacts.length > 0 ? (
          <Contacts contacts={contacts} onDelete={deleteContact} />
        ) : (
          'No contacts'
        )}
      </div>
    </div>
  );
}

export default App;
