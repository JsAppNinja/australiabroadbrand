import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AnonymousPhoto from '../AnonymousPhoto';
import './style.scss';

class PromoCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, avatar, price, priceInfo, description } = this.props;

    return (
      <div className="card-section">
        <div className="card-title">{title}</div>
        <div className="card-information">
          <div className="card-info__avatar">
            <div className="card-info__avatar__border">
              <div
                className="card-info__avatar__photo"
                style={{
                  backgroundImage: `url('${avatar}'), url('${AnonymousPhoto}')`,
                }}
              />
            </div>
          </div>
          <div className="card-info__avatar__infoSection">
            <div className="card-info__avatar__info1">{priceInfo[0]}</div>
            <div className="card-info__avatar__price">{price}</div>
            <div className="card-info__avatar__info2">{priceInfo[1]}</div>
          </div>
        </div>
        <div className="card-info__description">{description}</div>
      </div>
    );
  }
}

PromoCard.propTypes = {
  title: PropTypes.string,
  avatar: PropTypes.string,
  price: PropTypes.string,
  priceInfo: PropTypes.array,
  description: PropTypes.string,
};

PromoCard.defaultProps = {
  title: '',
  avatar: '',
  price: '',
  priceInfo: [],
  description: '',
};

export default PromoCard;
