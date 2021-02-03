import React from 'react';

const Char = (props) => {
  const charStyle = {
    textAlign: 'text-center',
    margin: '16px',
    padding: '16px',
    display: 'inline-block',
    border: '1px solid black',
  };
  return <div style={charStyle} onClick={props.clicked}>{props.character}</div>;
};
export default Char;
