import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { deleteContact } = contactsSlice.actions;
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
