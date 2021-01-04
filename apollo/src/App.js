import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage=()=>{
  let list = localStorage.getItem('item');
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }else{
    return [];
  }
}
function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // display alert
      showAlert(true,'please enter value','danger');
    } else if (name && isEditing) {
      // deal with edit
      setList(list.map((item)=>{
        if(item.id===editId){
          return {...item,title:name}
        }
        return item;
      }))
      setName('');
      setEditId(null);
      setIsEditing(false);
      showAlert(true,'success','value changed');
    } else {
      // show alert
      showAlert(true,'item added to list','success');
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  };
  const showAlert=(show=false,msg="",type="")=>{
    setAlert({show,msg:msg,type:type})
  }
  const clearList=()=>{
    showAlert(true,'empty list','danger');
    setList([]);
  }
  const removeItem= (id)=>{
    showAlert(true,'item removed','danger');
    setList(list.filter((item)=>item.id!==id));
  }
  const editItem = (id)=>{
    const spesificItem = list.find((item)=>item.id===id);
    setIsEditing(true);
    setEditId(id);
    setName(spesificItem.title);
  }
  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list))
  },[list])
  return (
    <section className="section-center">
      <form className="instrument-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
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
        <List items={list} removeItem={removeItem} editItem={editItem}/>
        <button className="clear-btn" onClick={clearList}>Clear Instruments</button>
      </div>
       )
     }
    </section>
  );
}

export default App;
