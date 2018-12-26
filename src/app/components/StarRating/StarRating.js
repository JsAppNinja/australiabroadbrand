import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class StarRating extends Component {
  render() {
    const { total, rating } = this.props;
    const value = parseInt(rating, 10);
    const stars = [];

    for (var i = 0; i < 5; i++) {
      var klass = 'star-rating__star';

      if (value >= i && rating != null) {
        klass += ' is-selected';
      }

      stars.push(<label className={klass}>★</label>);
    }
    return <div className="star-rating">{stars}</div>;
  }
}

StarRating.propTypes = {
  total: PropTypes.number,
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

StarRating.defaultProps = {
  total: 5,
  rating: 0,
};

export default StarRating;
