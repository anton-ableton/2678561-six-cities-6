import { useState, ChangeEvent, FormEvent } from 'react';

function ReviewForm(): JSX.Element {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState<number | null>(null);

  const handleReviewChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(evt.target.value);
  };

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>

      <div className="reviews__rating-form form__rating">

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
          onChange={handleRatingChange}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
          onChange={handleRatingChange}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
          onChange={handleRatingChange}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
          onChange={handleRatingChange}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-star"
          type="radio"
          onChange={handleRatingChange}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>

      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={review}
        onChange={handleReviewChange}
        placeholder="Tell how was your stay, what you like and what can be improved"
      />

      <div className="reviews__button-wrapper">
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!rating || review.length < 50}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
