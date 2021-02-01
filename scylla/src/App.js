import Person from './completeGuide/Person/Person';
import './App.css';
import React, { Component } from 'react';
import UserInput from './completeGuide/UserInput/UserInput';
import UserOutput from './completeGuide/UserOutput/UserOutput';
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
    userName: 'Nisanur', // camelCase notation
    showPersons: false,
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
  userNameChangeEventHandler = (event) => {
    this.setState({
      persons: [
        {
          name: this.state.persons[0].name,
          number: this.state.persons[0].number,
        },
        {
          name: this.state.persons[1].name,
          number: this.state.persons[1].number,
        },
        {
          name: this.state.persons[2].name,
          number: this.state.persons[2].number,
        },
      ],
      otherState: this.state.otherState,
      userName: event.target.value,
    });
  };
  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState(
      {
        showPersons:!doesShow
      }
    )
  };
  render() {
    const inlineStyle = {
      border: '1px solid black',
      font: 'inherit',
      padding: '8px',
      margin: '8px',
      cursor: 'pointer',
    };

    return (
      <div className="App">
        <div style={inlineStyle}>
          <UserInput
            changed={this.userNameChangeEventHandler}
            currentName={this.state.userName}
          />
          <UserOutput userName={this.state.userName} />
        </div>
        <button
          style={inlineStyle}
          onClick={() => this.togglePersonsHandler()}
        >
          Toggle Persons
        </button>
        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              number={this.state.persons[0].number}
              click={this.switchNameHandler.bind(this, 'Yağmur Kınıcı')}
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
        ) : null}
      </div>
    );
  }
}

export default App;
