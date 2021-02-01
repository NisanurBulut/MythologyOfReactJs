import React from 'react'

const Person =(props) => {
   return(
   <div onClick={props.click}>
       <h1>I'm {props.name} && I love numbers for example : {props.number}</h1>
       <p>{props.children}</p>
       <input type="text" onChange={props.changed} />
   </div>
   );
}
export default Person;
