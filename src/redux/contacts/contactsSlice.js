import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  changeContact,
} from './operations';

const initialState = {
  contacts: [],
  operation: null,
  isLoading: false,
  error: null,
};

const handleRejected = (state, action) => {
  state.operation = null;
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState,

  extraReducers: {
    // =============== Отримання контактів
    [fetchContacts.pending](state) {
      state.operation = 'fetch';
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.operation = null;
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    // ==============Додавання контакта
    [addContact.pending](state) {
      state.operation = 'add';
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.operation = null;
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [addContact.rejected]: handleRejected,

    // =========== Видалення контакта
    [deleteContact.pending](state, action) {
      state.operation = `${action.meta.arg}`;
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.operation = null;
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
        contact => contact.id === action.meta.arg
      );
      state.contacts.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,

    /// ============ Змінення контакту
    [changeContact.pending](state) {
      state.operation = 'change';
      state.isLoading = true;
    },
    [changeContact.fulfilled](state, action) {
      state.operation = null;
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1, action.payload);
    },
    [changeContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;