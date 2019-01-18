import React from 'react';

import CheckButton from '../../../components/CheckButton';
import EXPLAIN_IMG1 from '../../../assets/svgs/about-hello1.svg';
import EXPLAIN_IMG2 from '../../../assets/svgs/about-hello2.svg';
import EXPLAIN_IMG3 from '../../../assets/nbn-concept-img1.png';
import EXPLAIN_LOGO from '../../../assets/logo.png';
import './style.scss';

const customStyle = {
  width: '180px',
  height: '38px',
  backgroundColor: '#f89729',
  color: '#ffffff',
  borderRadius: '22.5px',
  fontSize: '16px',
  fontWeight: 'bold',
};

const btnTitle = 'Come join us';

const AboutHello = () => (
  <div className="about__hello">
    <div className="about__hello-txt">
      <div className="about__hello-txt__title">
        Hello, we’re Australia Broadband
      </div>
      <div className="about__hello-txt__content">
        At the heart of it, we believe in simplicity. A better way to do telco.
        <br />
        <br />
        We’d rather you stay with us because you want to, not because there’s a
        nasty contract forcing you to.
        <br />
        <br />
        It’s why we work our socks off every day to keep you. We’re also big on
        that caring, sharing thing. That’s why we’ll reward you when you Share
        the Love with your friends.
        <br />
        <br />
        We’ve helped tens of thousands of Australians connect to the nbn™ and
        we'd love to help you too!
      </div>
      <CheckButton CustomStyle={customStyle} Content={btnTitle} />
    </div>
    <div className="about__hello-img">
      <div className="explain-img__topleft">
        <div className="explain-img__topleft-line" />
        Are you sick of providers who lock you into a contract, then don't
        provide you a service?
      </div>
      <div className="explain-img__topright">
        <img
          src={EXPLAIN_IMG1}
          alt="lprem"
          style={{
            width: '60px',
          }}
        />
      </div>
      <div className="explain-img__bottomleft" />
      <div
        className="explain-img__bottomright"
        style={{
          width: '420px',
          height: '290px',
          backgroundImage: 'url(' + EXPLAIN_IMG3 + ')',
        }}
      >
        <img src={EXPLAIN_LOGO} alt="lprem" />
        <div className="explain-img-text">
          <div className="explain-img_button">&#9658;</div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutHello;
