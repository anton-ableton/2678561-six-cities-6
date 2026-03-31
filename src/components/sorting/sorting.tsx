import { useState } from 'react';

type SortingProps = {
  onChange: (type: string) => void;
};

const options = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
];

function Sorting({ onChange }: SortingProps): JSX.Element {
  const [active, setActive] = useState('Popular');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <form
      className='places__sorting'
      action='#'
      method='get'
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className='places__sorting-caption'>Sort by</span>

      <span className='places__sorting-type' tabIndex={0}>
        {active}
        <svg className='places__sorting-arrow' width={7} height={4}>
          <use xlinkHref='#icon-arrow-select' />
        </svg>
      </span>

      <ul
        className={`places__options places__options--custom ${
          isOpen ? 'places__options--opened' : ''
        }`}
      >
        {options.map((option) => (
          <li
            key={option}
            className={`places__option ${
              option === active ? 'places__option--active' : ''
            }`}
            tabIndex={0}
            onClick={() => {
              setActive(option);
              setIsOpen(false);
              onChange(option);
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;
