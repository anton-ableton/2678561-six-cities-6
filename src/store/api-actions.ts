import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { requireAuthorization } from './action';
import { AuthorizationStatus } from '../const';
import { saveToken, dropToken } from '../services/token';
import { Offer } from '../types/offer';
import { AuthData, AuthResponse } from '../types/auth';
import { APIRoute } from '../const';

export const checkAuth = createAsyncThunk<
  void,
  undefined,
  { extra: AxiosInstance }
>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get('/login');
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const login = createAsyncThunk<
  void,
  AuthData,
  { extra: AxiosInstance }
>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<AuthResponse>('/login', {
      email,
      password
    });

    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  }
);

export const logout = createAsyncThunk<
  void,
  undefined,
  { extra: AxiosInstance }
>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete('/logout');
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
);

export const fetchOffers = createAsyncThunk<
  Offer[],
  undefined,
  { extra: AxiosInstance }
>('data/fetchOffers', async (_, { extra: api }) => {
  const { data } = await api.get<Offer[]>(APIRoute.Offers);
  return data;
});
