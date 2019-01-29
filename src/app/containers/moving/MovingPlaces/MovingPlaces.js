import React, { Component } from 'react';
import Dropdown from './Dropdown';
import BlurTitleBar from '../../../components/BlurTitleBar';

import DataFAQ from './Data';
import './style.scss';
class MovingPlaces extends Component {
  render() {
    return (
      <div className="moving-places">
        <BlurTitleBar
          data={{
            blurtitle: 'MOVING PLACES',
            title: 'Start moving with our hassle free nbn moving service',
          }}
        />
        <div className="moving-places__content">
          <h2 className="moving-places__content_header">
            Here are some frequently asked questions to assist you:
          </h2>
          {DataFAQ.map((item, index) => (
            <Dropdown data={item} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default MovingPlaces;
