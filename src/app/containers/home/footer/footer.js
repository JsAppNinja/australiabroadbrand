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

import favPhone from '../../../assets/svgs/header-phone.svg';
import favFacebook from '../../../assets/svgs/fav-facebook.svg';
import favTwitter from '../../../assets/svgs/fav-twitter.svg';
import favYoutube from '../../../assets/svgs/fav-youtube.svg';
import favInstagram from '../../../assets/svgs/fav-instagram.svg';

class Footer extends Component {
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
        <Col xs={12} md={12} className="footer__help-section">
          <div className="footer__help-section__left">
            <img src={FAV_NBN} />
            <img src={FAV_EWAY} />
            <img src={FAV_GOOGLE_PLAY} />
            <img src={FAV_APPSTORE} />
          </div>
          <div className="footer__help-section__right">
            <div className="footer__help-section__right-title">
              Australia Broadband Help
            </div>
            <div className="footer__help-section__right-content">
              <div className="footer__help-section__right-content__content">
                <Link to={DATA.help[0].path}>{DATA.help[0].title}</Link>
                <Link to={DATA.help[4].path}>{DATA.help[4].title}</Link>
              </div>
              <div className="footer__help-section__right-content__content">
                <Link to={DATA.help[1].path}>{DATA.help[1].title}</Link>
                <Link to={DATA.help[5].path}>{DATA.help[5].title}</Link>
              </div>
              <div className="footer__help-section__right-content__content">
                <Link to={DATA.help[2].path}>{DATA.help[2].title}</Link>
                <Link to={DATA.help[6].path}>{DATA.help[6].title}</Link>
              </div>
              <div className="footer__help-section__right-content__content">
                <Link to={DATA.help[3].path}>{DATA.help[3].title}</Link>
                <Link to={DATA.help[7].path}>{DATA.help[7].title}</Link>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={12} className="footer__contact-section">
          <div className="footer__contact-section__left">
            <div className="footer__contact-section__favicon">
              <img src={favPhone} />
            </div>
            <div className="footer__contact-section__phonecall">Call</div>
          </div>
          <div className="footer__contact-section__right">
            <div className="footer__contact-section__favicon">
              <img src={favFacebook} />
            </div>
            <div className="footer__contact-section__favicon">
              <img src={favTwitter} />
            </div>
            <div className="footer__contact-section__favicon">
              <img src={favYoutube} />
            </div>
            <div className="footer__contact-section__favicon">
              <img src={favInstagram} />
            </div>
          </div>
        </Col>
        {/* 
      <Col xs={12} md={12} className="footer__final-section">
      Footer4 Test
      </Col> */}
      </div>
    );
  }
}

export default Footer;
