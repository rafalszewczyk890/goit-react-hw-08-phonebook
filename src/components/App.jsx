import { useEffect, useRef } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelector } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const isMounted = useRef(false);
  const contacts = useSelector(contactsSelector);
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector(contactsSelector);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      {isLoading && <p>Loading contacts...</p>}
      {items.length > 0 && <ContactList />}
    </>
  );
};
