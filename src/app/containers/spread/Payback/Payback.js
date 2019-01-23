import React from 'react';
import PAYBACK_IMG from '../../../assets/svgs/spread-payback1.svg';
import PAYBACK_FAV from '../../../assets/svgs/spread-payback2.svg';
import './style.scss';

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
      <div className="payback-faq__learn">Learn more</div>
    </div>
  </div>
);

export default Payback;
