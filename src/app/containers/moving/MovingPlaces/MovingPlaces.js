import React, { Component } from 'react';
import Dropdown from './Dropdown';
import BlurTitleBar from '../../../components/BlurTitleBar';

import DataFAQ from './Data';
import './style.scss';
class MovingPlaces extends Component {
  state = {
    openedDropdownIdx: null,
  };
  expandDropdown = openedDropdownIdx => {
    this.setState(prevState => {
      const newOpenedDropdownIdx =
        prevState.openedDropdownIdx === openedDropdownIdx
          ? null
          : openedDropdownIdx;
      return { openedDropdownIdx: newOpenedDropdownIdx };
    });
  };
  render() {
    const { openedDropdownIdx } = this.state;
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
          {DataFAQ.map((item, itemIdx) => (
            <Dropdown
              data={{ item, openedDropdownIdx, itemIdx }}
              key={itemIdx}
              expandDropdown={this.expandDropdown}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MovingPlaces;
