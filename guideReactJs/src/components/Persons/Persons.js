import React from 'react';
import Person  from './Person/Person';
import styled from './Persons.css'
const Persons = (props) => props.persons.map((person, index) => {
    return (<div className={styled.Persons}>
        <Person
        key={person.id}
        name={person.name}
        number={person.number}
        click={() => props.deleteClicked(index)}
        changed={(event) =>
          props.userNameChanged(event, person.id)}
      />
    </div>)
  });
  export default Persons;
