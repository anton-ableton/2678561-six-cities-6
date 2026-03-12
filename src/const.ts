export const Setting = {
  OffersCount: 5
};

export enum AppRoute {
  Login = '/login',
  Main = '/',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum PageTitle {
  Login = '6 cities. Sign in',
  Main = '6 cities',
  Favorites = '6 cities. Saved listing',
  Offer = '6 cities. Offer',
  NotFound = '6 cities. Page not found',
}
