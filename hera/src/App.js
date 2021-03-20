import React, { useState } from 'react';
import data from './data';
import List from './List';
import axios from 'axios';
import { GET_BIRTHDAYS } from './util/queries';

function App() {
  const [people, setPeople] = useState([]);
  const getBirthdays = () => {
    axios
      .post('http://localhost:4000/graphql', GET_BIRTHDAYS)
      .then((res) => setPeople(res.data.data.getBirthdays))
      .catch((err) => console.log(err));
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthday Reminder </h3>
        <List people={people}></List>
        <button onClick={getBirthdays}>Refresh</button>
      </section>
    </main>
  );
}

export default App;
