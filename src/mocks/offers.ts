import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    rating: 4,
    isPremium: true,
    previewImage: 'img/apartment-01.jpg',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198
    }
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    rating: 4,
    isPremium: false,
    previewImage: 'img/room.jpg',
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198
    }
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    rating: 4,
    isPremium: false,
    previewImage: 'img/apartment-02.jpg',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198
    }
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    rating: 5,
    isPremium: true,
    previewImage: 'img/apartment-03.jpg',
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198
    }
  }
];
