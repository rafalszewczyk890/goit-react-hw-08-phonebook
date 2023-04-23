import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = [
  { id: 1, name: 'rafal', number: '444-555-333' },
  { id: 2, name: 'karo', number: '444-587655-333' },
  { id: 3, name: 'koko', number: '466644-558765-333' },
  { id: 4, name: 'poko', number: '44764-555-333' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    prepare(contact) {
      return {
        payload: {
          id: nanoid(),
          name: contact.name,
          number: contact.number,
        },
      };
    },
    deleteContact(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
