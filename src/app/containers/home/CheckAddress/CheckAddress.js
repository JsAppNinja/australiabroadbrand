import React from 'react';
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
      <img src={AddressImg} alt="Smiley face" height="42" width="42" />
    </div>
    <div className="check-address__title">
      Fast & amazingly simple nbn™ with unlimited data, no contracts and $0
      activation
    </div>
    <div className="check-address__button">
      <CheckButton CustomStyle={customStyle} Content={btnTitle} />
    </div>
  </div>
);

export default CheckAddress;
