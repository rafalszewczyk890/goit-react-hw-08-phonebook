import { useEffect, useRef } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { useSelector } from 'react-redux';
import { contactsSelector } from 'redux/selectors';

export const App = () => {
  const isMounted = useRef(false);
  const contacts = useSelector(contactsSelector);

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } else {
      isMounted.current = true;
    }
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
    </>
  );
};
