import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Beautiful studio in Amsterdam',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.5,
    previewImage: 'img/apartment-01.jpg'
  },
  {
    id: '2',
    title: 'Cozy room in Paris',
    type: 'room',
    price: 80,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.8566,
        longitude: 2.3522,
        zoom: 8
      }
    },
    location: {
      latitude: 48.8666,
      longitude: 2.3333,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.2,
    previewImage: 'img/room.jpg'
  },
  {
    id: '3',
    title: 'Apartment in Cologne',
    type: 'apartment',
    price: 100,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.9375,
        longitude: 6.9603,
        zoom: 8
      }
    },
    location: {
      latitude: 50.9475,
      longitude: 6.9703,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.0,
    previewImage: 'img/apartment-02.jpg'
  },
  {
    id: '4',
    title: 'Nice flat in Amsterdam',
    type: 'apartment',
    price: 150,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3709553943508,
      longitude: 4.90309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    previewImage: 'img/apartment-03.jpg'
  }
];
