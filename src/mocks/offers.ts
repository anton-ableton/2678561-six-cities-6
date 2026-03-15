export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  rating: number;
  isPremium: boolean;
  previewImage: string;
};

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    rating: 4,
    isPremium: true,
    previewImage: 'img/apartment-01.jpg'
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    rating: 4,
    isPremium: false,
    previewImage: 'img/room.jpg'
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    rating: 4,
    isPremium: false,
    previewImage: 'img/apartment-02.jpg'
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    rating: 5,
    isPremium: true,
    previewImage: 'img/apartment-03.jpg'
  }
];
