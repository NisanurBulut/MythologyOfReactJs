import React from 'react'
const Contact = ({contact}) => {
    return (
        <div className="contact">
            <h3>{contact.text}</h3>
            <p>{contact.day}</p>
        </div>
    )
}

export default Contact
