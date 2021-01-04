import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // display alert
    } else if (name && isEditing) {
      // deal with edit
    } else {
      // show alert
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  };
  return (
    <section className="section-center">
      <form className="instrument-form" onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>Apollo</h3>
        <div className="form-control">
          <input
            type="text"
            className="instrument"
            placeholder="e.g. guitar"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? 'Edit' : 'Add'}
          </button>
        </div>
      </form>
     {
       list.length>0 && (
        <div className="instrument-container">
        <List items={list} />
        <button className="clear-btn">Clear Instruments</button>
      </div>
       )
     }
    </section>
  );
}

export default App;
