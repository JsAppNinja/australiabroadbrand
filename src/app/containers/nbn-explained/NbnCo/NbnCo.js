import React from 'react';

import NBN_CO1 from '../../../assets/svgs/nbn-co1.svg';
import NBN_CO2 from '../../../assets/svgs/nbn-co2.svg';
import NBN_CO3 from '../../../assets/svgs/nbn-co3.svg';
import './style.scss';

const NbnCo = () => (
  <div className="nbn-co">
    <div className="nbn-co__left">
      <div className="nbn-co__left-title">
        NBN<sup>TM</sup> Co service installation
      </div>
      <div className="nbn-co__left-content">
        After you order an nbn™ plan from Australia Broadband, we'll organise
        your appointment with NBN Co for the nbn™ service installation (if you
        need one).
        <br />
        <br />
        If required, an NBN Co technician or third party contractor will then
        come to your home or apartment building and if you need it, install any
        equipment. Depending on the nbn™ technology you get at your home, the
        configuration will look slightly different.
        <br />
        <br />
        You'll also be kept updated by SMS and email at every step of the
        connection process by Australia Broadband.
      </div>
    </div>
    <div className="nbn-co__right">
      <div className="co_top1">amazingly simple</div>
      <div className="co_top2">
        <div className="co_top2_img">
          <img src={NBN_CO1} alt="lprem" />
        </div>
        <div className="co_top2_txt">SMS</div>
        <div className="co_top2_txt2">updates at every step</div>
      </div>
      <div className="co_top3">fast</div>
      <div className="co_bottom1">
        <div className="co_bottom1_img">
          <img src={NBN_CO2} alt="lprem" />
        </div>
        <div className="co_bottom1_txt">Phone</div>
        <div className="co_bottom1_txt2">we're here to help</div>
      </div>
      <div className="co_bottom2">
        <div className="co_bottom2_img">
          <img src={NBN_CO3} alt="lprem" />
        </div>
        <div className="co_bottom2_txt">Phone</div>
        <div className="co_bottom2_txt2">we're here to help</div>
      </div>
      <div className="co_bottom3">
        nbn<sup>TM</sup> from Australia Broadband
      </div>
    </div>
  </div>
);

export default NbnCo;
