import React from 'react';
import { FaHeartBroken, FaHandHoldingHeart } from 'react-icons/all';
const Contact = ({ contact, onDelete, onToggleReminder }) => {
  return (
    <div
      className={`contact ${contact.reminder ? 'reminder' : ''}`}
    >
      <h3>
        {contact.text}
        <div className='icons'>
          <FaHeartBroken
          size={25}
            className='iconStyle'
            onClick={() => onDelete(contact.id)}
          />
          <FaHandHoldingHeart
           size={25}
             className='iconStyle'
            onClick={() => onToggleReminder(contact.id)}
          />
        </div>
      </h3>
      <p>{contact.day}</p>
    </div>
  );
};

export default Contact;
