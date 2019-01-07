import React, { Component } from 'react';
import ReviewItem from '../../../components/ReviewItem';
import Data from './Data';
import './style.scss';

class ReviewSection extends Component {
  render() {
    return (
      <div className="review-section">
        <div className="reviewconnection-blurtitle">OUR REVIEWS</div>
        <div className="review-section__titlebar">
          <div className="review-section__title">{Data.title}</div>
          <div className="review-section__line" />
        </div>
        <div className="review-section__content">
          <ul id="reviews">
            {Data.reviews.map((item, index) => (
              <li key={index} className="review-cards__item">
                <ReviewItem
                  rating={item.rating}
                  userCount={item.userCount}
                  reviewImg={item.reviewImg}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ReviewSection;
