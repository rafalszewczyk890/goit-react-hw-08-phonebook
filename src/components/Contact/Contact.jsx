import React from 'react';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';

export const Contact = props => {
  const { id, name, number } = props;

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li id={id}>
      {name}: {number} <button onClick={handleDelete}>Delete</button>
    </li>
  );
};
