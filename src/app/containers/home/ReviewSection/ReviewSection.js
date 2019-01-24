import React, { Component } from 'react';
import ReviewItem from '../../../components/ReviewItem';
import BlurTitleBar from '../../../components/BlurTitleBar';

import Data from './Data';
import './style.scss';

import ReviewImg1 from '../../../assets/rview-trustpilot-brandmark-gr.png';
import ReviewImg2 from '../../../assets/rview-gather-up.png';
import ReviewImg3 from '../../../assets/rview-google.png';

const reviewImgList = [ReviewImg1, ReviewImg2, ReviewImg3];

class ReviewSection extends Component {
  render() {
    return (
      <div className="review-section">
        {/* <div className="reviewconnection-blurtitle">OUR REVIEWS</div>
        <div className="review-section__titlebar">
          <div className="review-section__title">{Data.title}</div>
          <div className="review-section__line" />
        </div> */}
        <BlurTitleBar data={{ blurtitle: 'OUR REVIEWS', title: Data.title }} />
        <div className="review-section__content">
          <ul id="reviews">
            {Data.reviews.map((item, index) => (
              <li key={index} className="review-cards__item">
                <ReviewItem
                  rating={item.rating}
                  userCount={item.userCount}
                  reviewImg={reviewImgList[index]}
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
