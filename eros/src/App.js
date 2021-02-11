import React, { useState } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import Contacts from './components/Contacts';
import AddContact from './components/AddContact';

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
  const toggleReminder = (id) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === id
          ? { ...contact, reminder: !contact.reminder }
          : contact
      )
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <AddContact />
          <Header title="Eros" />
          {contacts.length > 0 ? (
            <Contacts
              contacts={contacts}
              onDelete={deleteContact}
              onToggleReminder={toggleReminder}
            />
          ) : (
            'No contacts'
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
