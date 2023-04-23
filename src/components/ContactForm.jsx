import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const getStorageContactNames = () => {
    let storageContactNames = [];
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    for (let contact of contacts) {
      storageContactNames.push(contact.name);
    }
    return storageContactNames;
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    let storageContactNames = getStorageContactNames();
    if (storageContactNames.includes(form.name.value)) {
      alert(`${form.name.value} is already in the contacts!`);
    } else {
      dispatch(
        addContact({
          id: nanoid(),
          name: form.name.value,
          number: form.number.value,
        })
      );
    }
    form.name.value = '';
    form.number.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label>Number</label>
      <input
        type="tel"
        name="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};
