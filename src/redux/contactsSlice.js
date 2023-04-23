import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const storageContacts = JSON.parse(localStorage.getItem('contacts'));

const contactsInitialState = storageContacts || [];

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
