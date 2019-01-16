import React from 'react';
import NBN_HELP from '../../../assets/svgs/nbn-help.svg';

import NBN_ICON1 from '../../../assets/svgs/nbn-help2.svg';
import NBN_ICON2 from '../../../assets/svgs/nbn-help3.svg';
import NBN_ICON3 from '../../../assets/svgs/nbn-help4.svg';
import NBN_ICON4 from '../../../assets/svgs/nbn-help5.svg';

import NBN_HELP_PHONE from '../../../assets/svgs/nbn-help-phone.svg';
import NBN_HELP_EMAIL from '../../../assets/svgs/nbn-help-email.svg';

import './style.scss';

const NbnHelp = () => (
  <div className="nbn-help">
    <div className="nbn-help__left">
      <div className="nbn-help__left-title">WE'RE HERE TO HELP</div>
      <div className="nbn-help__left-content">
        We're open 9am to Midnight, Monday to Friday and 9am to 6pm
        <br />
        Weekends and Public Hoildays.
      </div>
      <div className="nbn-help__left-phone">
        <img src={NBN_HELP_PHONE} alt="lprem" />
        Call 1300 023 354 and talk to us.
      </div>
      <div className="nbn-help__left-email">
        <img src={NBN_HELP_EMAIL} alt="lprem" />
        Email Us 24/7. We'll make sure you're quickly put in
        <br />
        touch with someone who’s ready to help.
      </div>
      <div className="nbn-help__left-favicon">
        <img src={NBN_ICON1} alt="lprem" />
        <img src={NBN_ICON2} alt="lprem" />
        <img src={NBN_ICON3} alt="lprem" />
        <img src={NBN_ICON4} alt="lprem" />
      </div>
    </div>
    <div className="nbn-help-right">
      <img src={NBN_HELP} alt="lprem" />
    </div>
  </div>
);

export default NbnHelp;
