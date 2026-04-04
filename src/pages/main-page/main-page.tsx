import {Helmet} from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { RootState } from '../../store';
import {PageTitle, SortType} from '../../const';
import OffersList from '../../components/offers-list/offers-list';
import CitiesList from '../../components/cities-list/cities-list';
import Map from '../../components/map/map';
import Sorting from '../../components/sorting/sorting';

function MainPage(): JSX.Element {
  const [sortType, setSortType] = useState<SortType>(SortType.Popular);
  const { city, offers } = useSelector((state: RootState) => state);
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const filteredOffers = offers.filter((offer) => offer.city.name === city);

  const sortedOffers = [...filteredOffers].sort((a, b) => {
    switch (sortType) {
      case SortType.PriceLowToHigh:
        return a.price - b.price;
      case SortType.PriceHighToLow:
        return b.price - a.price;
      case SortType.TopRated:
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className='page page--gray page--main'>
      <Helmet>
        <title>{PageTitle.Main}</title>
      </Helmet>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <a className='header__logo-link header__logo-link--active'>
                <img
                  className='header__logo'
                  src='img/logo.svg'
                  alt='6 cities logo'
                  width={81}
                  height={41}
                />
              </a>
            </div>
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                <li className='header__nav-item user'>
                  <a
                    className='header__nav-link header__nav-link--profile'
                    href='#'
                  >
                    <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                    <span className='header__user-name user__name'>
                      Oliver.conner@gmail.com
                    </span>
                    <span className='header__favorite-count'>3</span>
                  </a>
                </li>
                <li className='header__nav-item'>
                  <a className='header__nav-link' href='#'>
                    <span className='header__signout'>Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <section className='locations container'>
            <CitiesList />
          </section>
        </div>
        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>{filteredOffers.length} places to stay in {city}</b>
              <Sorting onChange={setSortType} />
              <div className='cities__places-list places__list tabs__content'>
                <OffersList offers={sortedOffers} onHover={setActiveOfferId} />
              </div>
            </section>
            <div className='cities__right-section'>
              <section className='cities__map map'>
                <Map offers={sortedOffers} activeOfferId={activeOfferId} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
