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
    Important information
    <div className="imp-information__img" />
  </div>
);

export default sharelove;
