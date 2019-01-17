import React from 'react';
import NBN_PICK from '../../../assets/svgs/nbn-pick.svg';
import CheckButton from '../../../components/CheckButton';
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

const btnTitle = 'pick your plan';

const Pick = () => (
  <div
    className="nbn-pick"
    style={{
      backgroundImage: 'url(' + NBN_PICK + ')',
    }}
  >
    <div className="nbn-pick__title">
      Enjoy fast & amazingly simple nbn™ with Australia Broadband
    </div>
    <div className="nbn-pick__content">
      nbn™ Fibre to the Premise (FTTP) is ready to be connected to 132 Cremorne
      Street, Cremorne VIC 3121.
    </div>
    <CheckButton CustomStyle={customStyle} Content={btnTitle} />
  </div>
);

export default Pick;
