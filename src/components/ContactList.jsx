import React from 'react';
import { Contact } from './Contact';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  return (
    <ul>
      {contacts.map(contact => {
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
