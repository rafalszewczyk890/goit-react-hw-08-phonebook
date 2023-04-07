import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

const LOCALSTORAGE_KEY = 'contacts';

export const App = () => {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState([]);

  // function componentDidMount() {
  //   const storageContacts = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  //   this.setState({
  //     contacts: storageContacts,
  //   });
  //   console.log(this.state);
  // }

  // function componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem(
  //       LOCALSTORAGE_KEY,
  //       JSON.stringify(this.state.contacts)
  //     );
  //   }
  // }

  useEffect(() => {
    const storageContacts = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    setContacts(storageContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const onFilterChange = event => {
    setFilter({ filter: event.target.value });
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
      }
    }

    setContacts(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
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
