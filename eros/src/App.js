import React, { useState } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import Contacts from './components/Contacts';
import AddContact from './components/AddContact';

function App() {
  const [showAddContact, setShowAddContact]=useState(false);
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
  const addContact = (contact)=>{
    const id = Math.floor(Math.random()*1000)+1;
    const newContact = { id, ...contact};
    setContacts([...contacts, newContact]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Header title="Eros" onAdd={()=>setShowAddContact(!showAddContact)} showAddContact={showAddContact} />
         {showAddContact &&  <AddContact onAdd={addContact} />}
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
