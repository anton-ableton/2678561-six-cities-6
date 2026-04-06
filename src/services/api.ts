import axios, { AxiosInstance, AxiosError } from 'axios';
import { getToken, dropToken } from './token';
import { store } from '../store';
import { requireAuthorization } from '../store/action';
import { AuthorizationStatus } from '../const';

const BASE_URL = 'https://14.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['X-Token'] = token;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        dropToken();

        store.dispatch(
          requireAuthorization(AuthorizationStatus.NoAuth)
        );
      }

      return Promise.reject(error);
    }
  );

  return api;
};
