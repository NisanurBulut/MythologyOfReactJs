import React, { useState } from 'react';
import { RiUserHeartFill } from 'react-icons/all';
function AddContact({ onAdd }) {

  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert('Please add a text');
      return;
    }
    onAdd({ text, day, reminder });
    setText('');
    setDay('');
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
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
      <button type="submit" className="btn btn-block">
        <RiUserHeartFill className="iconStyle" size={25} />
      </button>
    </form>
  );
}

export default AddContact;
