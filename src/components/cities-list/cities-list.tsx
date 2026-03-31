import { useDispatch } from 'react-redux';
import { setCity } from '../../store/action';

const cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

function CitiesList(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <ul className='locations__list tabs__list'>
      {cities.map((city) => (
        <li key={city} className='locations__item'>
          <a
            className='locations__item-link tabs__item'
            href='#'
            onClick={(e) => {
              e.preventDefault();
              dispatch(setCity(city));
            }}
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default CitiesList;
