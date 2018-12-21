import React, { Component } from 'react';
import CheckButton from '../../../components/CheckButton';

import AddressImg from '../../../assets/svgs/address-check.svg';
import './style.scss';

const customStyle = {
  width: '230px',
  height: '45px',
  backgroundColor: '#f89729',
  color: '#ffffff',
  borderRadius: '22.5px',
  fontSize: '18px',
  fontWeight: 'bold',
};

const btnTitle = 'Сheck address';

const CheckAddress = () => (
  <div className="check-address">
    <div className="check-address__image">
      <img src={AddressImg} />
    </div>
    <div className="check-address__title">Check your Address Section</div>
    <div className="check-address__button">
      <CheckButton CustomStyle={customStyle} Content={btnTitle} />
    </div>
  </div>
);

export default CheckAddress;
