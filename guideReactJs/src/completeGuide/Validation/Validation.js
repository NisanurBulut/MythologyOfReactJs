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
  //   return (
  //     <div>
  //       {props.inputLength >= 5 ? (
  //         <p>Text is too long</p>
  //       ) : (
  //         <p>Text is too short !</p>
  //       )}
  //     </div>
  //   );
};
export default validation;
