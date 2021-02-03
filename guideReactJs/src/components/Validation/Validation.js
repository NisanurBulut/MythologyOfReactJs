import { React } from 'react';
const validation = (props) => {
  // better way
  let validationMessage = 'Text is too long';
  if (props.inputLength <= 5) {
    validationMessage = 'Text is too short !';
  }
  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  );
};
export default validation;
