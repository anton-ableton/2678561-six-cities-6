import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

export const ActionType = {
  SET_CITY: 'SET_CITY',
  SET_OFFERS: 'SET_OFFERS'
} as const;

export type ActionTypeValue = typeof ActionType[keyof typeof ActionType];

export const setCity = createAction<string>(ActionType.SET_CITY);
export const setOffers = createAction<Offer[]>(ActionType.SET_OFFERS);
