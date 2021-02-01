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
    this.setState({
      showPersons: !doesShow,
    });
  };
  deletePersonHandler = (index) => {
    // refarans tipli olduğu için bu şekilde silmek yani diziyi okumak doğru değil
    // const persons= this.state.persons.slice();
    /* Best Practise */
    const persons=[...this.state.persons];
    persons.splice(index,1);
    this.setState({
      persons:persons
    })
  };
  render() {
    const inlineStyle = {
      border: '1px solid black',
      font: 'inherit',
      padding: '8px',
      margin: '8px',
      cursor: 'pointer',
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                number={person.number}
                click={() => this.deletePersonHandler(index)}
              ></Person>
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <div style={inlineStyle}>
          <UserInput
            changed={this.userNameChangeEventHandler}
            currentName={this.state.userName}
          />
          <UserOutput userName={this.state.userName} />
        </div>
        <button style={inlineStyle} onClick={() => this.togglePersonsHandler()}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
