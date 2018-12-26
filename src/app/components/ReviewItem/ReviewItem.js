import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import StarRating from '../StarRating';

const ReviewItem = ({ rating, userCount, reviewImg }) => {
  const className = cx('kreview', {
    'kreview--featured': featured,
  });

  return (
    <div className={className}>
      <div className="kreview-score">
        <div className="kreview-score__mark">{rating}</div>
        <div className="kreview__rating">
          <div className="kreview__rating-count">from {userCount} reviews</div>
          <StarRating rating={rating} />
        </div>
      </div>
      <div className="kreview-reviewImage">
        <img src={reviewImg} />
      </div>
    </div>
  );
};

ReviewItem.propTypes = {
  rating: PropTypes.number,
  userCount: PropTypes.string,
  reviewImg: PropTypes.string,
};

ReviewItem.defaultProps = {
  rating: 5,
};

export default ReviewItem;
