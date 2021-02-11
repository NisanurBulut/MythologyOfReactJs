import Contact from "./Contact";

const Contacts = ({ contacts, onDelete, onToggleReminder }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <Contact key={contact.id}
        contact={contact}
        onDelete={onDelete}
        onToggleReminder={onToggleReminder} />
      ))}
    </div>
  );
};

export default Contacts;
