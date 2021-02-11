import React, { useState } from 'react';

function AddContact() {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  return (
    <form className="add-form">
      <div className="form-control">
        <input
          type="text"
          placeholder="contact"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="birthDay"
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <input type="submit" value="save" className="btn btn-block" />
    </form>
  );
}

export default AddContact;
