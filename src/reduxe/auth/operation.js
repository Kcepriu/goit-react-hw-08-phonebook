import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'user/register',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', user);
      setAuthHeader(response.data.token);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk('user/logIn', async (user, thunkAPI) => {
  try {
    const response = await axios.post('/users/login', user);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logOut = createAsyncThunk('user/logOut', async (_, thunkAPI) => {
  try {
    const response = await axios.post('/users//users/logout');
    clearAuthHeader();
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  'user/refreshUser',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/users/current');
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
