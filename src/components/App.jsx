import { useState, useEffect, useRef } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

const LOCALSTORAGE_KEY = 'contacts';

export const App = () => {
  const isMounted = useRef(false);

  // useEffect(() => {
  //   const storageContacts = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  //   if (storageContacts) {
  //     setContacts(storageContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (isMounted.current) {
  //     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(contacts));
  //   } else {
  //     isMounted.current = true;
  //   }
  // }, [contacts]);


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
