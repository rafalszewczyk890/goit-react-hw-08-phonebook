import React from 'react';
import { Contact } from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { contactsSelector, filterSelector } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul>
      {filteredContacts.map(contact => {
        return (
          <Contact
            id={contact.id}
            key={contact.id}
            name={contact.name}
            number={contact.number}
          />
        );
      })}
    </ul>
  );
};
