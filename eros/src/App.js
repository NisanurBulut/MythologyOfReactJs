import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import Contacts from './components/Contacts';
import AddContact from './components/AddContact';

function App() {
  const url = 'http://localhost:5000/contacts';
  const [showAddContact, setShowAddContact] = useState(false);
  const [contacts, setContacts] = useState([]);
  const fetchContacts = async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };
  useEffect(() => {
    const getGontacts = async () => {
      const contactsFromServer = await fetchContacts();
      setContacts(contactsFromServer);
    };
    getGontacts();
  }, []);

  const deleteContact = async (id) => {
    await fetch(`${url}/${id}`, {
      method:'DELETE'
    });
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
  const addContact = async (contact) => {
    console.log(JSON.stringify(contact));
    const res = await fetch (`${url}`, {
      method:'POST',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify(contact)
    })
    const data = await res.json();
    setContacts([...contacts, data]);
    setShowAddContact(false);
    // const id = Math.floor(Math.random() * 1000) + 1;
    // const newContact = { id, ...contact };
    // setContacts([...contacts, newContact]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Header
            title="Eros"
            onAdd={() => setShowAddContact(!showAddContact)}
            showAddContact={showAddContact}
          />

          {contacts.length > 0 ? (
            <Contacts
              contacts={contacts}
              onDelete={deleteContact}
              onToggleReminder={toggleReminder}
            />
          ) : (
            'No contacts'
          )}
          {showAddContact && <AddContact onAdd={addContact} />}
        </div>
      </header>
    </div>
  );
}

export default App;
