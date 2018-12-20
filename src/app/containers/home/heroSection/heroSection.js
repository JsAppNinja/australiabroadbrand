import React, { Component } from 'react';
import PromoCard from '../../../components/PromoCard';

import './style.scss';
import Data from './Data';

class HeroSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hero">
        <div className="hero-action">
          <div className="hero-action__title"> {Data.herotitle} </div>
          <div className="hero-action__desc">{Data.heroDescription}</div>
          <div className="hero-action__button">{Data.buttonContent}</div>
        </div>
        <div className="hero-cards">
          <ul id="links">
            {Data.cards.map((item, index) => (
              <li key={index} className="hero-cards__item">
                <PromoCard
                  title={item.title}
                  avatar={item.avatar}
                  price={item.price}
                  priceInfo={item.priceInfo}
                  description={item.description}
                />
                >
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default HeroSection;
