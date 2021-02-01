import React from 'react'
import './Person.css';
const Person =(props) => {
   return(
   <div className="Person" onClick={props.click}>
       <h1>I'm {props.name} && I love numbers for example : {props.number}</h1>
       <p>{props.children}</p>
       <input type="text" onChange={props.changed} value={props.name} />
   </div>
   );
}
export default Person;
