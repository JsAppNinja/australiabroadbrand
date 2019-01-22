import React from 'react';
import CheckButton from '../../../components/CheckButton';
import ShareLove from '../../../assets/spread-sharelove.png';
import './style.scss';

const customStyle = {
  width: '180px',
  height: '38px',
  backgroundColor: '#67cebb',
  color: '#ffffff',
  borderRadius: '22.5px',
  fontSize: '16px',
  fontWeight: 'bold',
};

const btnTitle = 'Start sharing';

const sharelove = () => (
  <div className="sharelove">
    <div className="sharelove-left">
      <div className="sharelove-left__title">Share the love</div>
      <div className="sharelove-left__content">
        Earn $100 for each friend that you bring on board.
        <br />
        <br />
        Life’s better when you share it! Terms apply.
      </div>
      <CheckButton CustomStyle={customStyle} Content={btnTitle} />
    </div>
    <div className="sharelove-right">
      <img src={ShareLove} alt="Share Love" />
    </div>
  </div>
);

export default sharelove;
