import React from 'react';

import ABOUT_LOCK_SVG1 from '../../../assets/svgs/about-lock1.svg';
import ABOUT_LOCK_SVG2 from '../../../assets/svgs/about-lock3.svg';
import ABOUT_LOCK_SVG3 from '../../../assets/svgs/about-lock3.svg';

import './style.scss';

const AboutLock = () => (
  <div className="about__lock">
    <div className="about__lock-blurtitle">NO LOCK IN CONTRACTS</div>
    <div className="about__lock-title">why we work our socks off</div>
    <div className="about__lock-titleline" />
    <div className="about__lock-content">
      <div className="about__lock-content-pad">
        <img src={ABOUT_LOCK_SVG1} alt="left" />
        <div className="about__lock-content-pad__txt">
          Amazingly simple nbn™ plans
        </div>
        <div className="about__lock-content-pad__txt">
          No setup fees, no plan change fees, no relocation fees & no hidden
          fees. With Australia Broadband, what you see is what you get - it's
          that simple!
        </div>
      </div>
      <div className="about__lock-content-pad">
        <img src={ABOUT_LOCK_SVG2} alt="center" />
        <div className="about__lock-content-pad__txt">
          Customer service drives everything we do
        </div>
        <div className="about__lock-content-pad__txt">
          Our team have a passion for providing phenomenal customer service and
          we're online 365 days a year to provide help when you need it.
        </div>
      </div>
      <div className="about__lock-content-pad">
        <img src={ABOUT_LOCK_SVG3} alt="right" />
        <div className="about__lock-content-pad__txt">
          We reward you for sharing the love
        </div>
        <div className="about__lock-content-pad__txt">
          Earn $100 for each friend that you bring on board. We'd rather reward
          our customers and focus on providing you a fantastic nbn™ service than
          pay a marketing guru to tell you how good we are.
        </div>
      </div>
    </div>
  </div>
);

export default AboutLock;
