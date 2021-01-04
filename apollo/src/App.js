import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName]=useState('');
  const [list, setList]=useState([]);
  const [isEditing,setIsEditing]=useState(false);
  const [editId,setEditId]=useState(null);
  const [alert, setAlert]=useState({show:false, msg:'',type:''});
  const handleSubmit =(e)=>{
    e.preventDefault();
  }
  return (
    <section className="section-center">
      <form action="instrument-form" onSubmit={handleSubmit}>
        {alert.show && <Alert/>}
        <h3>Apollo</h3>
        <div className="form-control">
          <input type="text"/>
        </div>
      </form>
      <div className="instrument-container">
        <List/>
        <button className="clear-btn">
          Clear Items
        </button>
      </div>
    </section>
  );
}

export default App
