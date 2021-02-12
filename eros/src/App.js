import React, { useState, useEffect, useContext } from 'react';
import FormContextProvider, { FormContext } from './contexts/FormContext';
import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import Contacts from './components/Contacts';
import AddContact from './components/AddContact';

function App() {
  const url = 'http://localhost:5000/contacts';

  const [contacts, setContacts] = useState([]);
  const fetchContacts = async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };
  const fetchContact = async (id) => {
    const res = await fetch(`${url}/${id}`);
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
      method: 'DELETE',
    });
    setContacts(contacts.filter((a) => a.id !== id));
  };
  const toggleReminder = async (id) => {
    const reminderContact = await fetchContact(id);
    const updateContact = {
      ...reminderContact,
      reminder: !reminderContact.reminder,
    };
    const res = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(updateContact),
    });
    const data = await res.json();

    setContacts(
      contacts.map((contact) =>
        contact.id === id ? { ...contact, reminder: data.reminder } : contact
      )
    );
  };
  const addContact = async (contact) => {
    console.log(JSON.stringify(contact));
    const res = await fetch(`${url}`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(contact),
    });
    const data = await res.json();
    setContacts([...contacts, data]);
    toggleForm();
    // const id = Math.floor(Math.random() * 1000) + 1;
    // const newContact = { id, ...contact };
    // setContacts([...contacts, newContact]);
  };
  const { isFormOpen, toggleForm } = useContext(FormContext);
  return (

    <div className="App">
        <header className="App-header">
          <h2>Love Tracker</h2>
          <div className="container">
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
            {isFormOpen && <AddContact onAdd={addContact} />}
          </div>
        </header>
      </div>
  );
}

export default App;
