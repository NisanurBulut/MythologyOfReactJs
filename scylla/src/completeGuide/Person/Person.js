import React, { Component } from 'react'

const Person =(props) => {
   return(
   <div>
       <h1>I'm {props.name} && I love numbers for example : {props.number}</h1>
       <p>{props.children}</p>
   </div>
   );
}
export default Person;
