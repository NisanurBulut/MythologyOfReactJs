import React from 'react'
import StyledPerson from './Person.css';

const Person =(props) => {
   return(
   <div className={StyledPerson.Person}>
       <h1 onClick={props.click}>I'm {props.name} && I love numbers for example : {props.number}</h1>
       <p>{props.children}</p>
       <input type="text" onChange={props.changed} value={props.name} />
   </div>
   );
}
export default Person;
