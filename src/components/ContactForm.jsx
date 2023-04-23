import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const getStorageContactValues = () => {
    let storageContactValues = [];
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    for (let contact of contacts) {
      storageContactValues.push(...Object.values(contact));
    }
    return storageContactValues;
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    let storageContactValues = getStorageContactValues();
    console.log(storageContactValues);
    if (storageContactValues.includes(form.name.value)) {
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
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label>Number</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};
