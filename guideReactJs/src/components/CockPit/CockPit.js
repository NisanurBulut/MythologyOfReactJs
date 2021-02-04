import React, {useEffect} from 'react';
import classes from '../CockPit/CockPit.css';
const Cockpit = (props) => {

  useEffect(()=>{
    console.log("[CockPit.js] useEffect");
   const timer = setTimeout(()=>{
     console.log("timer");
     return ()=>{
      clearTimeout(timer);
     }
   },1000)
    // http request yapılabilir
  },[props.persons]);
  useEffect(()=>{
    // cleaning
    return ()=>{
      console.log("cleaning");
    }
  });
    let assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass=classes.Red;
    }
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
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

export default React.memo(Cockpit);
