import Person from '../Person/Person';
import classes from './AppCompleteGuide.css';
import React, { Component } from 'react';
import styled from 'styled-components';
import UserInput from '../UserInput/UserInput';
import UserOutput from '../UserOutput/UserOutput';
import Validation from '../Validation/Validation';
import Char from '../Char/Char';


class AppCompleteGuide extends Component {
  // her zaman iki eleman döner
  // modern reactjs showing destructiong
  state = {
    persons: [
      { id: 1, name: 'Nisanur', number: 10 },
      { id: 2, name: 'Furkan', number: 11 },
      { id: 3, name: 'Yağmur', number: 12 },
    ],
    userInput: '',
    otherState: 'Some Other State',
    userName: 'Nisanur', // camelCase notation
    showPersons: false,
  };

  userNameChangeEventHandler = (event, id) => {
    this.setState({
      userName: event.target.value,
    });
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
  inputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };
  deleteCharHandler = (index) => {
    const charList = this.state.userInput.split('');
    charList.splice(index, 1);
    const updatedText = charList.join('');
    this.setState({
      userInput: updatedText,
    });
  };
  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return (
        <Char
          key={index}
          character={ch}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });

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
                changed={(event) =>
                  this.userNameChangeEventHandler(event, person.id)
                }
              ></Person>
            );
          })}
        </div>
      );
    }
    let assignedClasses = [];
    if(this.state.persons.length<=2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length<=1){
      assignedClasses.push(classes.bold);
    }
    return (
      <div className="App">
        <h1 className={assignedClasses.join(' ')}>Hi ! Im React App</h1>
        <div>
          <input
            type="text"
            onChange={(event) => this.inputChangeHandler(event)}
            value={this.state.userInput}
          />
          <p>{this.state.userInput}</p>
          <Validation inputLength={this.state.userInput.length} />
          {charList}
        </div>
        <div>
          <UserInput
            changed={this.userNameChangeEventHandler}
            currentName={this.state.userName}
          />
          <UserOutput userName={this.state.userName} />
        </div>
        <button
         className={classes.StyledButton}
          onClick={() => this.togglePersonsHandler()}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default AppCompleteGuide;
