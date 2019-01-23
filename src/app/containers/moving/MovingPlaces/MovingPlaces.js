import React, { Component } from 'react';
import Dropdown from './Dropdown';
import './style.scss';

import DataFAQ from './Data';
class MovingPlaces extends Component {
  render() {
    return (
      <div className="moving-places">
        <div className="movingplaces-blurtitle">MOVING PLACES</div>
        <div className="moving-places__titlebar">
          <div className="moving-places__title">
            Start moving with our hassle free nbn moving service
          </div>
          <div className="moving-places__line" />
        </div>
        <div className="moving-places__content">
          {DataFAQ.map((item, index) => (
            <Dropdown data={item} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default MovingPlaces;
