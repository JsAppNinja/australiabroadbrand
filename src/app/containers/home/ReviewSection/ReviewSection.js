import React, { Component } from 'react';
import ReviewItem from '../../../components/ReviewItem';
import Data from './Data';
import './style.scss';

class ReviewSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="review-section">
        <div className="review-section__titlebar" />
        <div className="review-section__title">{Data.title}</div>
        <div className="review-section__bar" />
      </div>
    );
  }
}

export default ReviewSection;
