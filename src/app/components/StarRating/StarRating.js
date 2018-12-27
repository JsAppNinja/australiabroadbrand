import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class StarRating extends Component {
  render() {
    const { rating } = this.props;
    const value = parseInt(rating, 10);
    const stars = [];

    for (var i = 0; i < 5; i++) {
      var klass = 'star-rating__star';

      if (value >= i && rating != null) {
        klass += ' is-selected';
      }

      stars.push(
        <label key={i} className={klass}>
          ★
        </label>
      );
    }
    return <div className="star-rating">{stars}</div>;
  }
}

StarRating.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

StarRating.defaultProps = {
  rating: 0,
};

export default StarRating;
