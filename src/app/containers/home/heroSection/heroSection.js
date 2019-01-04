import React, { Component } from 'react';
import PromoCard from 'components/PromoCard';
import CheckButton from 'components/CheckButton';

import './style.scss';
import Data from './Data';

class HeroSection extends Component {
  render() {
    const customStyle = {
      width: '230px',
      height: '45px',
      backgroundColor: '#f89729',
      color: '#ffffff',
      borderRadius: '22.5px',
      fontSize: '18px',
    };

    return (
      <div className="hero">
        <div className="hero-action">
          <div className="hero-action__title">
            {Data.herotitle[0]} <br /> {Data.herotitle[1]}
          </div>
          <div className="hero-action__desc">{Data.heroDescription}</div>
          <div className="hero-action__button">
            <CheckButton
              CustomStyle={customStyle}
              Content={Data.buttonContent}
            />
          </div>
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default HeroSection;
