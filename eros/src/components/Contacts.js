import React from 'react'
const contacts = [
    {
        id:1,
        text:'Furkan\'s birthday',
        day:'1 November',
        reminder:true
    }
]
const Contacts = () => {
    return (
        <div>
            {contacts.map((contact)=>(<h3 key ={contact.id}>{contact.text}</h3>))}
        </div>
    )
}

export default Contacts
