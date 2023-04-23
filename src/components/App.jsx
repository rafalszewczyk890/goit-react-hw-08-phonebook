import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
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

  // const onFilterChange = event => {
  //   setFilter(event.target.value);
  // };

  // const addContact = (event, name, number) => {
  //   event.preventDefault();
  //   const newContact = {
  //     name: name,
  //     number: number,
  //     id: nanoid(),
  //   };

  //   for (let contact of contacts) {
  //     if (Object.values(contact).includes(newContact.name)) {
  //       alert(`${name} is already in the contacts`);
  //       return;
  //     }
  //   }

  //   setContacts([...contacts, newContact]);
  // };

  // const onDelete = id => {
  //   setContacts(
  //     contacts.filter(contact => {
  //       return contact.id !== id;
  //     })
  //   );
  //   console.log(contacts);
  // };

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
