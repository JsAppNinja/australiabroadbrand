import React, { Component } from 'react';
import Data from './Data';
import PropTypes from 'prop-types';

import './style.scss';

class CustomerTypes extends Component {
  state = {
    selectedCustomer: {
      type: '',
      isActive: false,
    },
  };
  handleClick = (type, isActive) => {
    const { selectedCustomer } = this.state;
    this.setState(
      {
        selectedCustomer: {
          isActive: !selectedCustomer.isActive,
          type: selectedCustomer.type === type ? '' : type,
        },
      },
      () => {
        this.props.toggleSteps(this.state.selectedCustomer);
      }
    );
  };

  render() {
    const { isActive, type } = this.state.selectedCustomer;
    const { newCustomer, existingCustomer } = Data;
    const newCustomerMatch = isActive && type === 'new-customer';
    const existingCustomerFavList = isActive && type === 'existing-customer';
    return (
      <section className={`customers ${!isActive ? 'customers_backdown' : ''}`}>
        <article
          className={`customers__card new-customer ${
            newCustomerMatch ? 'active' : ''
          }`}
          onClick={() => this.handleClick(newCustomer.type, isActive)}
        >
          <img src={newCustomer.img} alt="new-customer" />
          <p>{newCustomer.text}</p>
        </article>
        <article
          className={`customers__card existing-customer ${
            existingCustomerFavList ? 'active' : ''
          }`}
          onClick={() => this.handleClick(existingCustomer.type)}
        >
          <img src={existingCustomer.img} alt="existing-customer" />
          <p className="">{existingCustomer.text}</p>
        </article>
      </section>
    );
  }
}

CustomerTypes.propTypes = {
  toggleSteps: PropTypes.func.isRequired,
};

export default CustomerTypes;
