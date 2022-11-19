import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
  

///
Notify.init({
    width: '200px',
    position: 'right-bottom',
    closeButton: false,
  });

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
      try {
        const response = await axios.post('/users/signup', credentials);
        setAuthHeader(response.data.token);
        Notify.success('SingUp successfully');
        return response.data;
      } catch (e) {
        Notify.failure(e.message);
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const login = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
      try {
        const response = await axios.post('/users/login', credentials);
        setAuthHeader(response.data.token);
        Notify.success('SignIn successfully');
        return response.data;
      } catch (e) {
        Notify.failure(e.message);
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
      Notify.success('LogOut successfully');
    } catch (e) {
      Notify.failure(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  });

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
  
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
  
    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  });
 
