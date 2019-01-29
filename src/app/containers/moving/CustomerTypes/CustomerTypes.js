import React, { Component } from 'react';
import Data from './Data';
import PropTypes from 'prop-types';

import './style.scss';

class CustomerTypes extends Component {
  render() {
    const { activeType, toggleSteps } = this.props;
    const { newCustomer, existingCustomer } = Data;
    const backdownClass = activeType !== null ? 'customers_backdown' : '';
    const newCustomerMatch = activeType === 'new-customer';
    const existingCustomerFavList = activeType === 'existing-customer';
    return (
      <section className={`customers ${backdownClass}`}>
        <article
          className={`customers__card new-customer ${
            newCustomerMatch ? 'active' : ''
          }`}
          onClick={() => toggleSteps(newCustomer.type)}
        >
          <img src={newCustomer.img} alt="new-customer" />
          <p>{newCustomer.text}</p>
        </article>
        <article
          className={`customers__card existing-customer ${
            existingCustomerFavList ? 'active' : ''
          }`}
          onClick={() => toggleSteps(existingCustomer.type)}
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
