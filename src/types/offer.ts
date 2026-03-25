export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  rating: number;
  isPremium: boolean;
  previewImage: string;
  location: {
    latitude: number;
    longitude: number;
  };
};
