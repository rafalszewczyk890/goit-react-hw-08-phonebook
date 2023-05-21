import React from 'react';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
import css from './Contact.module.css';

export const Contact = props => {
  const { id, name, number } = props;

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.item} id={id}>
      {name}: {number}{' '}
      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};
