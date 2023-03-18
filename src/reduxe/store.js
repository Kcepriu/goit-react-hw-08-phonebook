import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './sliceContacts';
import { filterReducer } from './sliceFilter';
import { authReducer } from './auth/sliceAuth';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
