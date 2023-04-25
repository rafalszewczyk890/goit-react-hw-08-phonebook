import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },

  
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// reducers: {
//     fetchingInProgress(state) {
//       state.isLoading = true;
//     },
//     fetchingSuccess(state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     fetchingError(state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     addContact(state, action) {
//       state.push(action.payload);
//     },
//     prepare(contact) {
//       return {
//         payload: {
//           id: nanoid(),
//           name: contact.name,
//           number: contact.number,
//         },
//       };
//     },
//     deleteContact(state, action) {
//       const index = state.findIndex(task => task.id === action.payload);
//       state.splice(index, 1);
//     },
//   },