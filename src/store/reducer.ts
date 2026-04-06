import { createReducer } from '@reduxjs/toolkit';
import { setCity } from './action';
import { Offer } from '../types/offer';
import { fetchOffers } from './api-actions';
import { AuthorizationStatus } from '../const';
import { requireAuthorization } from './action';
import { login, logout, checkAuth } from './api-actions';

export type State = {
  city: string;
  offers: Offer[];
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userEmail: string | null;
};

export const initialState: State = {
  city: 'Paris',
  offers: [],
  isLoading: true,
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fetchOffers.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchOffers.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.userEmail = action.payload.email;
    })
    .addCase(logout.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.userEmail = null;
    })
    .addCase(checkAuth.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.userEmail = action.payload.email;
    })
    .addCase(checkAuth.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
});
