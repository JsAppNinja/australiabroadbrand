import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';
import { Link } from 'react-router-dom';

import DATA from './DATA';
import './style.scss';

import FOOTER_FAV1 from '../../assets/svgs/footer-fav1.svg';
import FOOTER_FAV2 from '../../assets/svgs/footer-fav2.svg';
import FOOTER_FAV3 from '../../assets/svgs/footer-fav3.svg';
import FOOTER_FAV4 from '../../assets/svgs/footer-fav4.svg';

import FAV_NBN from '../../assets/footer-nbn.png';
import FAV_EWAY from '../../assets/footer-eway.png';
import FAV_GOOGLE_PLAY from '../../assets/footer-gplay.png';
import FAV_APPSTORE from '../../assets/footer-appstore.png';

import favPhone from '../../assets/footer-call.png';
import favFacebook from '../../assets/svgs/fav-facebook.svg';
import favTwitter from '../../assets/svgs/fav-twitter.svg';
import favYoutube from '../../assets/svgs/fav-youtube.svg';
import favInstagram from '../../assets/svgs/fav-instagram.svg';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Col xs={12} md={12} className="footer__first-section">
          <Col xs={3} md={3} className="footer__first-section_item">
            <div className="footer__first-section_item-content">
              <img src={FOOTER_FAV1} alt="lorem" />
              <div>No Contracts</div>
            </div>
          </Col>
          <div className="footer__first-section_item-end" />
          <Col xs={3} md={3} className="footer__first-section_item">
            <div className="footer__first-section_item-content">
              <img src={FOOTER_FAV2} alt="lorem" />
              <div>Amazingly Simple</div>
            </div>
          </Col>
          <div className="footer__first-section_item-end" />
          <Col xs={3} md={3} className="footer__first-section_item">
            <div className="footer__first-section_item-content">
              <img src={FOOTER_FAV3} alt="lorem" />
              <div>Save Money</div>
            </div>
          </Col>
          <div className="footer__first-section_item-end" />
          <Col xs={3} md={3} className="footer__first-section_item">
            <div className="footer__first-section_item-content">
              <img src={FOOTER_FAV4} alt="lorem" />
              <div>Earn Rewards</div>
            </div>
          </Col>
        </Col>
        <Col xs={12} md={12} className="footer__help-section">
          <div className="footer__help-section__leftgroup">
            <div className="footer__help-section__left">
              <img src={FAV_NBN} alt="lorem" />
              <img src={FAV_EWAY} alt="lorem" />
              <img src={FAV_GOOGLE_PLAY} alt="lorem" />
              <img src={FAV_APPSTORE} alt="lorem" />
            </div>
            <div className="footer__contact-section">
              <div className="footer__contact-section__left">
                <div className="footer__contact-section__favicon">
                  <img src={favPhone} alt="lorem" width="16px" />
                </div>
                <div className="footer__contact-section__phonecall">
                  <div>CALL US</div>
                  <div>Call 1300 023 354 and talk to us.</div>
                </div>
              </div>
              <div className="footer__contact-section__right">
                <div className="footer__contact-section__favicon">
                  <img src={favFacebook} alt="lorem" />
                </div>
                <div className="footer__contact-section__favicon">
                  <img src={favTwitter} alt="lorem" />
                </div>
                <div className="footer__contact-section__favicon">
                  <img src={favYoutube} alt="lorem" />
                </div>
                <div className="footer__contact-section__favicon">
                  <img src={favInstagram} alt="lorem" />
                </div>
              </div>
            </div>
          </div>
          <div className="footer__help-section__right">
            <div className="footer__help-section__right-title">
              Australia Broadband Help
            </div>
            <div className="footer__help-section__right-content">
              <div className="footer__help-section__right-content__content">
                <a href="/personal">Personal</a>
                <Link to={DATA.help[0].path}>{DATA.help[0].title}</Link>
                <Link to={DATA.help[1].path}>{DATA.help[1].title}</Link>
                <Link to={DATA.help[2].path}>{DATA.help[2].title}</Link>
              </div>
              <div className="footer__help-section__right-content__content">
                <a href="/small-business">Small Business</a>
                <Link to={DATA.help[3].path}>{DATA.help[3].title}</Link>
                <Link to={DATA.help[4].path}>{DATA.help[4].title}</Link>
                <Link to={DATA.help[5].path}>{DATA.help[5].title}</Link>
                <Link to={DATA.help[6].path}>{DATA.help[6].title}</Link>
              </div>
              <div className="footer__help-section__right-content__content">
                <a href="/general">General</a>
                <Link to={DATA.help[7].path}>{DATA.help[7].title}</Link>
                <Link to={DATA.help[8].path}>{DATA.help[8].title}</Link>
                <Link to={DATA.help[9].path}>{DATA.help[9].title}</Link>
                <Link to={DATA.help[10].path}>{DATA.help[10].title}</Link>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={12} className="footer__final-section">
          <div className="footer__final-section__left">
            Australia Broadband is not available in all areas or to all homes.
            Australia Broadband and the Australia Broadband logo are trademarks
            of Australia Broadband Pvt Ltd (ABN 14 610 870 249). nbn™ is a
            trademark of NBN Co Limited and is used under license.
          </div>
          <div className="footer__final-section__right">
            <div className="footer__final-section__right-iterm">
              <Link to={DATA.siteInfo[0].path}>{DATA.siteInfo[0].title}</Link>
            </div>
            <div className="footer__final-section__right-iterm">
              <Link to={DATA.siteInfo[1].path}>{DATA.siteInfo[1].title}</Link>
            </div>
            <div className="footer__final-section__right-iterm">
              <Link to={DATA.siteInfo[2].path}>{DATA.siteInfo[2].title}</Link>
            </div>
            <div className="footer__final-section__right-iterm">
              <Link to={DATA.siteInfo[3].path}>{DATA.siteInfo[3].title}</Link>
            </div>
          </div>
        </Col>
      </div>
    );
  }
}

export default Footer;
