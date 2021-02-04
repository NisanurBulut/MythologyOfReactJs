import Persons from '../../components/Persons/Persons';
import React, { Component } from 'react';
import UserInput from '../../components/UserInput/UserInput';
import UserOutput from '../../components/UserOutput/UserOutput';
import Validation from '../../components/Validation/Validation';
import Char from '../../components/Char/Char';
import Cockpit from '../../components/CockPit/CockPit';

class AppCompleteGuide extends Component {
  // constructor yazmak best practise
  // çünkü initialize değerlerini doğru şekilde aldığından emin olursun
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('[AppCompleteGuide.js]');
  }

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
        <Persons
          persons={this.state.persons}
          deleteClicked={this.deletePersonHandler}
          userNameChanged={this.userNameChangeEventHandler}
        />
      );
    }

    return (
      <div>
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
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default AppCompleteGuide;
