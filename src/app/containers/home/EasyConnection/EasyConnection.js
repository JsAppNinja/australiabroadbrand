import React from 'react';
import CircleLink from '../../../components/CircleLink';

import FavHome from '../../../assets/svgs/connect-home.svg';
import FavUser from '../../../assets/svgs/connect-user.svg';
import FavNbn from '../../../assets/svgs/connect-nbn.png';
import FavEnjoy from '../../../assets/svgs/connect-enjoy.svg';

import Curve1 from '../../../assets/svgs/connect-curve1.svg';
import Curve2 from '../../../assets/svgs/connect-curve2.svg';
import Curve3 from '../../../assets/svgs/connect-curve3.svg';
import Curve4 from '../../../assets/svgs/connect-curve4.svg';

import Line1 from '../../../assets/svgs/connect-line1.svg';
import Line2 from '../../../assets/svgs/connect-line2.svg';
import Line3 from '../../../assets/svgs/connect-line3.svg';
import Line4 from '../../../assets/svgs/connect-line4.svg';

import Data from './DATA';
import './style.scss';
const favIconList = [FavHome, FavUser, FavNbn, FavEnjoy];

const EasyConnection = () => {
  return (
    <div className="easy-connection__section">
      <div className="easyconnection-blurtitle">CONNECT TO THE NBN</div>
      <div className="easy-connection__title">
        <div className="easy-connection__title-item">
          connecting with Australia Broadband is easy
        </div>
        <div className="easy-connection__title-line" />
      </div>
      <div className="easy-connection">
        <div className="easy-connection__left-section">
          <div className="easy-connection__left-section-top">
            <div className="description-curveline">
              <img src={Curve1} alt="curve" />
            </div>
            <div className="section-description">
              <div className="section-description__title">
                {Data.desc[0].title}
              </div>
              <div className="section-description__content">
                {Data.desc[0].content}
              </div>
            </div>
          </div>
          <div className="easy-connection__left-section-down">
            <div className="description-curveline">
              <img src={Curve3} alt="curve" />
            </div>
            <div className="section-description">
              <div className="section-description__title">
                {Data.desc[1].title}
              </div>
              <div className="section-description__content">
                {Data.desc[1].content}
              </div>
            </div>
          </div>
        </div>
        <CircleLink ImgPaths={favIconList} />
        <div className="easy-connection__right-section">
          <div className="easy-connection__right-section-top">
            <div className="description-curveline">
              <img src={Curve2} alt="curve" />
            </div>
            <div className="section-description">
              <div className="section-description__title">
                {Data.desc[2].title}
              </div>
              <div className="section-description__content">
                {Data.desc[2].content}
              </div>
            </div>
          </div>
          <div className="easy-connection__right-section-down">
            <div className="description-curveline">
              <img src={Curve4} alt="curve" />
            </div>
            <div className="section-description">
              <div className="section-description__title">
                {Data.desc[3].title}
              </div>
              <div className="section-description__content">
                {Data.desc[3].content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyConnection;
