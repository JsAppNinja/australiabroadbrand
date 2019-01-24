import React from 'react';
import PAYBACK_IMG from '../../../assets/svgs/spread-payback1.svg';
import PAYBACK_FAV from '../../../assets/svgs/spread-payback2.svg';

import CheckButton from '../../../components/CheckButton';
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

const Payback = () => (
  <div className="payback">
    <div className="payback-img">
      <img src={PAYBACK_IMG} alt="payback" />
    </div>
    <div className="payback-faq">
      <div className="payback-faq__title">FAQs </div>
      <div className="payback-faq__img">
        <img src={PAYBACK_FAV} alt="payback" />
      </div>
      <div className="payback-faq__content">
        A gift card is similar to gift vouchers or store cards. Each gift card
        can also be split into any combination of the gift cards and vouchers
        above, up to the total value of $50 for each friend you bring on board.
      </div>
      <div className="payback-faq__learn">Learn more --></div>
    </div>
    <div className="payback-right">
      <div className="payback-right__title">Payback</div>
      <div className="payback-right__content">
        <div className="payback-right__content-item">
          <div className="payback-num">1</div>
          <div className="payback-num__content">
            Earn $50 in Payback for each friend that successfully joins
            Australia Broadband.
          </div>
        </div>
        <div className="payback-right__content-item">
          <div className="payback-num">2</div>
          <div className="payback-num__content">
            You’ll get a $50 gift card a few days after the activation of your
            friends nbn<sup>TM</sup> service.
          </div>
        </div>
        <div className="payback-right__content-item">
          <div className="payback-num">3</div>
          <div className="payback-num__content">
            You can use your gift card with leading retailers or charities (over
            30 major retailers & charities across Australia).
          </div>
        </div>
      </div>
      <div className="payback-right__ref">Go on, start earning</div>
      <CheckButton CustomStyle={customStyle} Content={btnTitle} />
    </div>
  </div>
);

export default Payback;
