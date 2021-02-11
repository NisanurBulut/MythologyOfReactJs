import React from 'react';
import { FaTimes } from 'react-icons/fa';
const Contact = ({ contact, onDelete }) => {
  const iconStyle = {
    color: 'red',
    cursor: 'pointer',
  };
  return (
    <div className="contact">
      <h3>
        {contact.text}
        <FaTimes style={iconStyle} onClick={()=>onDelete(contact.id)} />
      </h3>
      <p>{contact.day}</p>
    </div>
  );
};

export default Contact;
