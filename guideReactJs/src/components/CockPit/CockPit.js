import React from 'react';
import classes from '../CockPit/CockPit.css';
const cockpit = (props) => {
    let assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass=classes.Red;
    }
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
  return (
    <div className={classes.Cockpit}>
      <h1 className={assignedClasses.join(' ')}>Hi! {props.title}</h1>
      <button
        className={btnClass}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
