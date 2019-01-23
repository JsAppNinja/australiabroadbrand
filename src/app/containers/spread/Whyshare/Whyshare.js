import React from 'react';

import Whyshare1 from '../../../assets/svgs/spread-share1.svg';
import Whyshare2 from '../../../assets/svgs/spread-share2.svg';
import Whyshare3 from '../../../assets/svgs/spread-share3.svg';
import Whyshare4 from '../../../assets/svgs/spread-share4.svg';
import Whyshare5 from '../../../assets/svgs/spread-share5.svg';
import Whyshare6 from '../../../assets/svgs/spread-share5.svg';

import CheckButton from '../../../components/CheckButton';
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

const btnTitle = 'Start sharing';

const Whyshare = () => (
  <div className="whyshare">
    <div className="whyshare-left">
      <img src={Whyshare1} alt="share" />
      <div className="whyshare-left__content">
        Share your personalised link on social media and invite your friends to
        join Australia Broadband.
      </div>
      <CheckButton CustomStyle={customStyle} Content={btnTitle} />
    </div>
    <div className="whyshare-right">
      <div className="whyshare-content">
        <div className="whyshare-content__top">
          “I refer around 3 people a month and get $150 a month to spend. Great
          for buying tickets for the footy, stuff from Myer and sometimes on
          groceries at Woolies. It is a great way to save and earn some dollars
          on the side.” John
        </div>
        <div className="whyshare-content__down">
          “I referred my brother to Australia Broadband and received a $50 gift
          card that I donated to the RSPCA.” Sarah
        </div>
      </div>
      <div className="whyshare-lefttop">
        <img src={Whyshare2} alt="share" />
      </div>
      <div className="whyshare-lefttop1">
        <img src={Whyshare3} alt="share" />
      </div>
      <div className="whyshare-leftdown">
        <img src={Whyshare4} alt="share" />
      </div>
      <div className="whyshare-righttop">
        <img src={Whyshare5} alt="share" />
      </div>
      <div className="whyshare-rightdown">
        <img src={Whyshare6} alt="share" />
      </div>
    </div>
  </div>
);

export default Whyshare;
