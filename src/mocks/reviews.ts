import { Review } from '../types/review';

export const reviews: Review[] = [
  {
    id: '1',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque...',
    rating: 3
  },
  {
    id: '2',
    date: '2019-06-08T14:13:56.569Z',
    user: {
      name: 'Maya',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: true
    },
    comment: 'A quiet cozy and picturesque...',
    rating: 4
  },
  {
    id: '3',
    date: '2019-07-08T14:13:56.569Z',
    user: {
      name: 'Maxwell',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque...',
    rating: 5
  }
];
