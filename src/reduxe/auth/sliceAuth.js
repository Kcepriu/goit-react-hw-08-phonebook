import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { logIn, logOut, register, refreshUser } from './operation';

const initialstate = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefresing: false,
  isError: false,
  textError: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialstate,
  extraReducers: {
    // * register
    [register.fulfilled](state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isError = false;
      state.textError = '';
    },
    // * logIn
    [logIn.fulfilled](state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isError = false;
      state.textError = '';
    },

    // * logOut
    [logOut.fulfilled](state, action) {
      state = {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefresing: false,
        isError: false,
        textError: '',
      };
    },

    // * refreshUser
    [refreshUser.fulfilled](state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.isError = false;
      state.textError = '';
      state.isRefresing = false;
    },

    // * register
    [register.pending](state, action) {
      state.isLoggedIn = false;
    },
    [register.rejected](state, action) {
      state.isLoggedIn = false;
      state.isError = true;
      state.textError = 'Помилка реєстрації';
    },

    // * logIn
    [logIn.pending](state, action) {
      state.isLoggedIn = false;
    },
    [logIn.rejected](state, action) {
      state.isLoggedIn = false;
      state.isError = true;
      state.textError = 'Помилка входу';
    },

    // * logOut
    [logOut.pending](state, action) {
      state.isLoggedIn = false;
    },
    [logOut.rejected](state, action) {
      state.isLoggedIn = false;
      state.isError = true;
      state.textError = 'Помилка входу';
    },

    // * refreshUser
    [refreshUser.pending](state, action) {
      state.isLoggedIn = false;
      state.isRefresing = true;
    },
    [refreshUser.rejected](state, action) {
      state.isLoggedIn = false;
      state.isRefresing = false;
    },
  },
});

const persistConfig = {
  key: 'tokenPhoneBook',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
