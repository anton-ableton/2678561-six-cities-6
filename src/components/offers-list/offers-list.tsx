import { useState } from 'react';
import OfferItem from '../offer-item/offer-item';
import { Offer } from '../../mocks/offers';

type OffersListProps = {
  offers: Offer[];
}

function OffersList({offers}: OffersListProps): JSX.Element {

  const [, setActiveOfferId] = useState<string | null>(null);

  return (
    <>
      {offers.map((offer) => (
        <OfferItem
          key={offer.id}
          offer={offer}
          onHover={setActiveOfferId}
        />
      ))}
    </>
  );
}

export default OffersList;
