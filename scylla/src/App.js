import Person from './completeGuide/Person/Person';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  // her zaman iki eleman döner
  // modern reactjs showing destructiong
   state = {
    persons: [
      { name: 'Nisanur', number: 10 },
      { name: 'Furkan', number: 11 },
      { name: 'Yağmur', number: 12 },
    ],
    otherState: 'Some Other State',
  };
  switchNameHandler = (newName) => {
    // DON'T DO THIS  this.state.persons[0].name+=' Bulut';
    // bu fonksıyon çalıştığında personsState'ten otherState kaybolmuş olacak
    // bunun önenüne geçmek için yeniden tanımlamalıyım
    this.setState({
      persons: [
        { name: newName, number: 10 },
        { name: 'Furkan delibaş', number: 11 },
        { name: newName, number: 12 },
      ],
      otherState: this.state.otherState,
    });
  };
  nameChangeEventHandler = (event) => {

    this.setState({
      persons: [
        { name: event.target.value, number: 10 },
        { name: event.target.value, number: 11 },
        { name: event.target.value, number: 12 },
      ],
      otherState: this.state.otherState,
    });
  };
  render() {
    const inlineStyle={
      backgroundColor:'#fff',
      border:'1px solid black',
      font:'inherit',
      padding:'8px',
      margin:'8px',
      cursor:'pointer'
    }

    return (
      <div className="App">
        <button
        style={inlineStyle}
        onClick={() => this.switchNameHandler('Nisanur Bulut')}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          number={this.state.persons[0].number}
          changed={this.nameChangeEventHandler}
        ></Person>
        <Person
          name={this.state.persons[1].name}
          number={this.state.persons[1].number}
        >
          <h2>Im doing practise on React</h2>
        </Person>
        <Person
          name={this.state.persons[2].name}
          number={this.state.persons[2].number}
          click={this.switchNameHandler.bind(this, 'Yağmur Kınıcı')}
        ></Person>
      </div>
    );
  }
}

export default App;
