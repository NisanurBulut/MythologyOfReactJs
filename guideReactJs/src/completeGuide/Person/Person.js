import React from 'react'
import styled from 'styled-components';
import './Person.css';

const PersonDivStyle=styled.div`
    width: 60%;
    margin: auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

   @media (min-width: 500px) {
      width: 450px;
  } `;
const Person =(props) => {
   return(
   <PersonDivStyle>
       <h1 onClick={props.click}>I'm {props.name} && I love numbers for example : {props.number}</h1>
       <p>{props.children}</p>
       <input type="text" onChange={props.changed} value={props.name} />
   </PersonDivStyle>
   );
}
export default Person;
