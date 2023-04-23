import React from 'react';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const Contact = props => {
  const { id, name, number } = this.props;

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li key={id}>
      {name}: {number} <button onClick={handleDelete}>Delete</button>
    </li>
  );
};
