import React from 'react';
import { FaTimes } from 'react-icons/fa';
const Contact = ({ contact, onDelete, onToggleReminder }) => {
  const iconStyle = {
    color: 'red',
    cursor: 'pointer',
  };
  return (
    <div
      className={`contact ${contact.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggleReminder(contact.id)}
    >
      <h3>
        {contact.text}
        <FaTimes style={iconStyle} onClick={() => onDelete(contact.id)} />
      </h3>
      <p>{contact.day}</p>
    </div>
  );
};

export default Contact;
