import Person from './completeGuide/Person/Person';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  // her zaman iki eleman döner
  // modern reactjs showing destructiong
  personsState = {
    persons: [
      { name: 'Nisanur', number: 10 },
      { name: 'Furkan', number: 11 },
      { name: 'Yağmur', number: 12 },
    ],
    otherState: 'some Other State',
  };
  switchNameHander = (newName) => {
    // DON'T DO THIS  this.state.persons[0].name+=' Bulut';
    // bu fonksıyon çalıştığında personsState'ten otherState kaybolmuş olacak
    // bunun önenüne geçmek için yeniden tanımlamalıyım
    this.setState({
      persons: [
        { name: newName, number: 10 },
        { name: 'Furkan delibaş', number: 11 },
        { name: newName, number: 12 },
      ],
      otherState: this.personsState.otherState,
    });
  };
  render() {
    return (
      <div className="App">
        <button
          onClick={() => this.switchNameHander(this, 'Nisanur Bulut')}
        >
          Switch Name
        </button>
        <Person
          name={this.personsState.persons[0].name}
          number={this.personsState.persons[0].number}
        ></Person>
        <Person
          name={this.personsState.persons[1].name}
          number={this.personsState.persons[1].number}
        >
          <h2>Im doing practise on React</h2>
        </Person>
        <Person
          name={this.personsState.persons[2].name}
          number={this.personsState.persons[2].number}
          click={this.switchNameHander.bind(this, 'Yağmur Kınıcı')}
        ></Person>
      </div>
    );
  }
}

export default App;
