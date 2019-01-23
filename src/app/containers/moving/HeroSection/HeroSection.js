import React, { Component } from 'react';
import CheckButton from '../../../components/CheckButton';

import './style.scss';
import Data from './Data';

class HeroSection extends Component {
  render() {
    const customStyle = {
      width: '230px',
      height: '45px',
      backgroundColor: '#67cebb',
      color: '#ffffff',
      borderRadius: '22.5px',
      fontSize: '18px',
    };

    return (
      <div className="moving-hero">
        <div className="moving-hero-action">
          <div className="moving-hero-action__title">{Data.herotitle}</div>
          <div className="moving-hero-action__desc">{Data.heroDescription}</div>
          <div className="moving-hero-action__button">
            <CheckButton
              CustomStyle={customStyle}
              Content={Data.buttonContent}
            />
          </div>
        </div>
        <div className="moving-hero-visual">
          <img src={Data.hero_left} alt="" />
          <img src={Data.hero_right} alt="" />
        </div>
      </div>
    );
  }
}

export default HeroSection;
