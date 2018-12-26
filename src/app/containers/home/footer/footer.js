import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';
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
    return (
      <div className="footer">
        <Col xs={12} md={12} className="footer__first-section">
          <Col xs={3} md={3} className="footer__first-section_item">
            <div className="footer__first-section_item-content">
              <img src={LOREM} />
              <div>Lorem ipsum</div>
            </div>
          </Col>
          <div className="footer__first-section_item-end" />
          <Col xs={3} md={3} className="footer__first-section_item">
            <div className="footer__first-section_item-content">
              <img src={LOREM} />
              <div>Lorem ipsum</div>
            </div>
          </Col>
          <div className="footer__first-section_item-end" />
          <Col xs={3} md={3} className="footer__first-section_item">
            <div className="footer__first-section_item-content">
              <img src={LOREM} />
              <div>Lorem ipsum</div>
            </div>
          </Col>
          <div className="footer__first-section_item-end" />
          <Col xs={3} md={3} className="footer__first-section_item">
            <div className="footer__first-section_item-content">
              <img src={LOREM} />
              <div>Lorem ipsum</div>
            </div>
          </Col>
        </Col>
        {/* <Col xs={12} md={12} className="footer__help-section">
      Footer2 Test
      </Col>
      <Col xs={12} md={12} className="footer__contact-section">
      Footer3 Test
      </Col>
      <Col xs={12} md={12} className="footer__final-section">
      Footer4 Test
      </Col> */}
      </div>
    );
  }
}

export default Footer;
