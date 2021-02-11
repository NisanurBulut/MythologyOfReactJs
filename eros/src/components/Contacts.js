const Contacts = ({contacts}) => {
    return (
        <div>
            {contacts.map((contact)=>(<h3 key ={contact.id}>{contact.text}</h3>))}
        </div>
    )
}

export default Contacts;
