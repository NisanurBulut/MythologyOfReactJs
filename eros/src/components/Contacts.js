import Contact from "./Contact";

const Contacts = ({ contacts, onDelete }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default Contacts;
