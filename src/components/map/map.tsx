import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Offer } from '../../mocks/offers';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  offers: Offer[];
};

const AMSTERDAM = {
  lat: 52.38333,
  lng: 4.9,
  zoom: 12
};

const customIcon = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [27, 39]
});

function Map({ offers }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && mapInstance.current === null) {
      mapInstance.current = L.map(mapRef.current, {
        center: [AMSTERDAM.lat, AMSTERDAM.lng],
        zoom: AMSTERDAM.zoom
      });

      L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution: '&copy; OpenStreetMap contributors'
        }
      ).addTo(mapInstance.current);
    }

    if (mapInstance.current) {
      offers.forEach((offer) => {
        const { latitude, longitude } = offer.location;

        L.marker([latitude, longitude], { icon: customIcon })
          .addTo(mapInstance.current!);
      });
    }
  }, [offers]);

  return (
    <div
      ref={mapRef}
      style={{ height: '100%' }}
    />
  );
}

export default Map;
