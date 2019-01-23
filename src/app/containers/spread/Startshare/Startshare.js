import React from 'react';

import Whyshare1 from '../../../assets/svgs/spread-whyshare1.svg';
import Whyshare2 from '../../../assets/svgs/spread-whyshare2.svg';
import Whyshare3 from '../../../assets/svgs/spread-whyshare3.svg';
import './style.scss';

const Startshare = () => (
  <div className="startshare">
    <div className="startshare-blurtitle">EARN PAYBACK</div>
    <div className="startshare-title">Why share?</div>
    <div className="startshare-titleline" />
    <div className="startshare-content">
      <div className="startshare-content__img">
        <img src={Whyshare1} alt="whyshare" />
        <div className="startshare-content__img-content">
          Earn $50 Payback to you for every friend you refer who successfully
          joins
        </div>
      </div>
      <div className="startshare-content__img">
        <img src={Whyshare2} alt="whyshare" />
        <div className="startshare-content__img-content">
          Your friend gets $10 off their nbn™ plan for 5 months ($50) plus they
          can earn Payback
        </div>
      </div>
      <div className="startshare-content__img">
        <img src={Whyshare3} alt="whyshare" />
        <div className="startshare-content__img-content">
          You both enjoy fast & amazingly simple nbn™ with no contracts
        </div>
      </div>
    </div>
  </div>
);

export default Startshare;
