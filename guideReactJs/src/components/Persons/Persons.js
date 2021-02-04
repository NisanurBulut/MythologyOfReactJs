import React, { Component } from 'react';
import Person from './Person/Person';
import styled from './Persons.css';
class Persons extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return this.props.persons.map((person, index) => {
      return (
        <div className={styled.Persons}>
          <Person
            key={person.id}
            name={person.name}
            number={person.number}
            click={() => this.props.deleteClicked(index)}
            changed={(event) => this.props.userNameChanged(event, person.id)}
          />
        </div>
      );
    });
  }
}
export default Persons;
