import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DATA from './DATA';
import './style.scss';

import LOREM from '../../../assets/svgs/lorem.svg';
import FAV_NBN from '../../../assets/footer-nbn.png';
import FAV_EWAY from '../../../assets/footer-eway.png';
import FAV_GOOGLE_PLAY from '../../../assets/footer-gplay.png';
import FAV_APPSTORE from '../../../assets/footer-appstore.png';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="footer">Test</div>;
  }
}

export default Footer;
