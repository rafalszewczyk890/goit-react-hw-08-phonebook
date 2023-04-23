import { useEffect, useRef } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { addContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const App = () => {
  const isMounted = useRef(false);

  const contacts = useSelector(state => state.contacts);

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
