import React from 'react';
import Person  from './Person/Person';
const Persons = (props) => props.persons.map((person, index) => {
    return <Person
        key={person.id}
        name={person.name}
        number={person.number}
        click={() => props.deleteClicked(index)}
        changed={(event) =>
          props.userNameChanged(event, person.id)}
      />
  });
  export default Persons;
