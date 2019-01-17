import React from 'react';

import NBN_VIDEO_FAV1 from '../../../assets/svgs/nbn-ready-fav1.svg';
import NBN_VIDEO_FAV2 from '../../../assets/svgs/nbn-ready-fav2.svg';
import NBN_VIDEO_FAV3 from '../../../assets/svgs/nbn-ready-fav3.svg';
import NBN_VIDEO_IMG from '../../../assets/nbn-ready-video.png';

import './style.scss';

const VideoOne = ({ title }) => (
  <div className="nbn-video">
    <div
      className="nbn-video__content"
      style={{
        backgroundImage: 'url(' + NBN_VIDEO_IMG + ')',
      }}
    >
      <div className="nbn-video__content-button">
        <img src={NBN_VIDEO_FAV1} alt="lprem" />
      </div>
      <div className="nbn-video__content-button">
        <img src={NBN_VIDEO_FAV2} alt="lprem" />
      </div>
    </div>
    <div className="nbn-video__img">
      <img src={NBN_VIDEO_FAV3} alt="lprem" />
    </div>
    <div className="nbn-video__title">{title}</div>
  </div>
);

const ReadyInstall = () => (
  <div className="nbn-ready">
    <div className="nbn-ready__blurtitle">FIRST TIME?</div>
    <div className="nbn-ready__title">
      Getting ready for your nbn<sup>TM</sup> installation
    </div>
    <div className="nbn-ready__titleline" />
    <div className="nbn-ready__content">
      If it is the first time your home is connecting to the nbn™ network, check
      out the below FAQs that provide some helpful information about your nbn™
      installation
    </div>
    <div className="nbn-ready__videos">
      <VideoOne title="How to prepare for my NBN connection" />
      <VideoOne title="What will happen on my NBN Installation day?" />
      <VideoOne title="Using my self installation kit" />
    </div>
  </div>
);

export default ReadyInstall;
