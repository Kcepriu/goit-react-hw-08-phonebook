import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register, refreshUser } from './operation';

const initialstate = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefresing: false,
  isError: false,
  textError: '',
};
const authSkice = createSlice({
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
    [refreshUser.fulfilled](state, action) {},

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
    },
    [refreshUser.rejected](state, action) {
      state.isLoggedIn = false;
      state.isError = true;
      state.textError = 'Помилка повторного входу';
    },
  },
});

export const authReducer = authSkice.reducer;
