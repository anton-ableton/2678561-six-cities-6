import { createReducer } from '@reduxjs/toolkit';
import { setCity } from './action';
import { Offer } from '../types/offer';
import { fetchOffers } from './api-actions';

export type State = {
  city: string;
  offers: Offer[];
  isLoading: boolean;
};

export const initialState: State = {
  city: 'Paris',
  offers: [],
  isLoading: true
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
    });
});
