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
      { id: 1, name: 'Nisanur', number: 10 },
      { id: 2, name: 'Furkan', number: 11 },
      { id: 3, name: 'Yağmur', number: 12 },
    ],
    otherState: 'Some Other State',
    userName: 'Nisanur', // camelCase notation
    showPersons: false,
  };

  userNameChangeEventHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    // YANLIŞ YONTEM : referans tanıma sebeple olduğu için:
    // const person=this.state.persons[personIndex];

    // Doğru ama modern olmyan yöntem
    // const person = Object.assign({},this.state.persons[personIndex]);

    // Doğru ve modern olan spread operator yontem
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const personList = [...this.state.persons];
    personList[personIndex] = person;

    this.setState({
      persons: personList,
    });

    /** bu değişim uzun görünüyor ancak gübenli olan seklı budur. */
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
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons,
    });
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
                key={person.id}
                name={person.name}
                number={person.number}
                click={() => this.deletePersonHandler(index)}
                changed={() =>
                  this.userNameChangeEventHandler(Event, person.id)
                }
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
