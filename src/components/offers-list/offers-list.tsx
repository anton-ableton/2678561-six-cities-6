import OfferItem from '../offer-item/offer-item';
import { Offer } from '../../types/offer';

type OffersListProps = {
  offers: Offer[];
  onHover: (id: string | null) => void;
};

function OffersList({ offers, onHover }: OffersListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => (
        <OfferItem
          key={offer.id}
          offer={offer}
          onHover={onHover}
        />
      ))}
    </>
  );
}

export default OffersList;
