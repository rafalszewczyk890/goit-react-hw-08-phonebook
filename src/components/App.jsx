import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

const LOCALSTORAGE_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storageContacts = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (storageContacts) {
      setContacts(storageContacts);
    }
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);

  const onFilterChange = event => {
    setFilter(event.target.value);
  };

  const addContact = (event, name, number) => {
    event.preventDefault();
    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    for (let contact of contacts) {
      if (Object.values(contact).includes(newContact.name)) {
        alert(`${name} is already in the contacts`);
        return;
      }
    }

    setContacts([...contacts, newContact]);
  };

  const onDelete = id => {
    console.log(id);
    setContacts(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => {
          return contact.id !== id;
        }),
      };
    });
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h1>Contacts</h1>
      <Filter filter={filter} onFilterChange={onFilterChange} />
      <ContactList contacts={contacts} filter={filter} onDelete={onDelete} />
    </>
  );
};
