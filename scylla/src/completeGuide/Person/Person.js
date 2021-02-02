import React from 'react'
import Radium from 'radium';
import './Person.css';
const Person =(props) => {
   return(
   <div className="Person">
       <h1 onClick={props.click}>I'm {props.name} && I love numbers for example : {props.number}</h1>
       <p>{props.children}</p>
       <input type="text" onChange={props.changed} value={props.name} />
   </div>
   );
}
export default Radium(Person);
