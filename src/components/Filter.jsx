import React from 'react';
import { setStatusFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    const form = event.target;
    dispatch(setStatusFilter(form.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        title="Filter contacts by name"
        onChange={handleChange}
      ></input>
    </div>
  );
};
