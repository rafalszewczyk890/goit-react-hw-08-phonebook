import React from 'react';
import { useDispatch } from 'react-redux';

import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const number = form.number.value;
    const text = { name, number };
    dispatch(addContact(text));
    form.reset();
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
