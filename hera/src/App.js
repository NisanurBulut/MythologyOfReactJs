import React, { useState } from 'react';
import data from './data';
import List from './List';
import axios from 'axios';

function App() {
  const [people,setPeople]=useState(data);
  return (
    <main>
    <section className="container">
      <h3>{people.length} Doğum Günü hatırlatması </h3>
      <List people={people}></List>
      <button onClick={()=>setPeople([])}>Hatırlatıcıyı Temizle</button>
    </section>
  </main>
  )
}

export default App;
