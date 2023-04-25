import axios from 'axios';
import {
  fetchingInProgress,
  fetchingError,
  fetchingSuccess,
} from './contactsSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6447f68650c25337443499e7.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get('/tasks');
  return response.data;
});
