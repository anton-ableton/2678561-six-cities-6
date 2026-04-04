import { useState } from 'react';
import { SortType, sortTypeLabels } from '../../const';

type SortingProps = {
  onChange: (type: SortType) => void;
};

const options = Object.values(SortType);

function Sorting({ onChange }: SortingProps): JSX.Element {
  const [active, setActive] = useState<SortType>(SortType.Popular);
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
            className={`places__option ${option === active ? 'places__option--active' : ''}`}
            onClick={() => {
              setActive(option);
              onChange(option);
            }}
          >
            {sortTypeLabels[option]}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;
