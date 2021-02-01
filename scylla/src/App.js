import Person from './completeGuide/Person/Person';
import './App.css';
import React, { useState } from 'react';

// her zaman iki eleman döner
// modern reactjs showing destructiong
const [personsState, setPersons] = useState({
  persons: [
    { name: 'Nisanur', number: 10 },
    { name: 'Furkan', number: 11 },
    { name: 'Yağmur', number: 12 },
  ],
  otherState: 'some Other State',
});
const switchNameHander = () => {
  // DON'T DO THIS  this.state.persons[0].name+=' Bulut';
 setPersons({
    persons: [
      { name: 'Nisanur bulut', number: 10 },
      { name: 'Furkan delibaş', number: 11 },
      { name: 'Yağmur kınıcı', number: 12 },
    ],
  });
};
const App = (props) => {
  return (
    <div className="App">
      <button onClick={this.switchNameHander}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        number={personsState.persons[0].number}
      />
      <Person
        name={personsState.persons[1].name}
        number={personsState.persons[1].number}
      >
        <h2>Im doing practise on React</h2>
      </Person>
      <Person
        name={personsState.persons[2].name}
        number={personsState.persons[2].number}
      />
    </div>
  );
};

export default App;
