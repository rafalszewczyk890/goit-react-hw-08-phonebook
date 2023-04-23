import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = [];

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
      state.filter(contact => {
        return contact.id !== action.payload;
      });
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
