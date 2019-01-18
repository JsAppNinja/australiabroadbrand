import React from 'react';

import ABOUT_WHY_SVG1 from '../../../assets/svgs/about-why1.svg';
import ABOUT_WHY_SVG2 from '../../../assets/svgs/about-why2.svg';
import ABOUT_WHY_SVG3 from '../../../assets/svgs/about-why3.svg';
import ABOUT_WHY_SVG4 from '../../../assets/svgs/about-why4.svg';
import ABOUT_WHY_IMG from '../../../assets/about-why.png';
import './style.scss';

const AboutWhy = () => (
  <div className="about__why">
    <div className="about__why-blurtitle">AMAZINGLY SIMPLE NBN</div>
    <div className="about__why-title">Why us?</div>
    <div className="about__why-titleline" />
    <div className="about__why-content">
      <div className="about__why-content-left">
        <div className="about__why-content-leftfirst">
          <div className="about__why-content-left__title">We’re flexible</div>
          <div className="about__why-content-left__content">
            Bring your own nbn-ready modem or buy our awesome nbn-ready modem
            from us. Change your plan anytime for free or stick with the same
            one. We’ll always recommend the right plan for you, even if that
            means you pay less.
          </div>
        </div>
        <div className="about__why-content-leftsecond">
          <div className="about__why-content-left__title">
            Customer service drives everything we do
          </div>
          <div className="about__why-content-left__content">
            Our customers are at the heart of everything we do. Got a question?
            Ask away. Need support? We’re here to help 365.2425 days a year.
          </div>
        </div>
      </div>
      <div className="about__why-content__center">
        <div className="center-circle">
          <div className="inner-circle">
            <img src={ABOUT_WHY_IMG} alt="src" />
          </div>
          <div className="out-circle1">
            <img src={ABOUT_WHY_SVG1} alt="out1" />
          </div>
          <div className="out-circle2">
            <img src={ABOUT_WHY_SVG2} alt="out2" />
          </div>
          <div className="out-circle3">
            <img src={ABOUT_WHY_SVG3} alt="out3" />
          </div>
          <div className="out-circle4">
            <img src={ABOUT_WHY_SVG4} alt="out4" />
          </div>
        </div>
      </div>
      <div className="about__why-content-right">
        <div className="about__why-content-rightfirst">
          <div className="about__why-content-right__title">
            We don’t tie you down
          </div>
          <div className="about__why-content-right__content">
            Buy our awesome plug & play nbn-ready modem from us. It’s unlocked
            and you’ll always get the best price. We’d love for you to stay, but
            if you do decide to leave you can take your modem with you at
            anytime (and transfer your nbn service) as we don’t lock you into a
            contract.
          </div>
        </div>
        <div className="about__why-content-rightsecond">
          <div className="about__why-content-right__title">
            We do things differently
          </div>
          <div className="about__why-content-right__content">
            We’re the David amongst Goliaths in telco-land. Big carrier networks
            have had it too good for too long. We may be sort-of-small, but
            we’re big on that caring, sharing thing.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutWhy;
