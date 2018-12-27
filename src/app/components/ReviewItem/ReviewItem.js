import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import StarRating from '../StarRating';

import './style.scss';

const ReviewItem = ({ featured, rating, userCount, reviewImg }) => {
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
        <img src={reviewImg} alt="lorem" height="30" width="30" />
      </div>
    </div>
  );
};

ReviewItem.propTypes = {
  featured: PropTypes.bool,
  rating: PropTypes.number,
  userCount: PropTypes.string,
  reviewImg: PropTypes.string,
};

ReviewItem.defaultProps = {
  featured: false,
  rating: 5,
};

export default ReviewItem;
