import React from 'react';
import PropTypes from 'prop-types';

import CircleLink from '../../../components/CircleLink';

import FavHome from '../../../assets/svgs/connect-home.svg';
import FavSignUp from '../../../assets/connection-signup-ico.png';
import FavMovingDate from '../../../assets/connection-moving-ico.png';
import FavNbn from '../../../assets/svgs/connect-nbn.png';
import FavEnjoy from '../../../assets/svgs/connect-enjoy.svg';

import Data from './DATA';
import '../../home/style.scss';
import '../../home/EasyConnection/style.scss';
import './style.scss';

const existingCustomerFavList = [
  FavHome,
  FavSignUp,
  FavMovingDate,
  FavNbn,
  FavEnjoy,
];
const newCustomerFavList = [FavHome, FavSignUp, FavNbn, FavEnjoy];

const EasyConnection = props => {
  const isExistingCustomer = props.stepsType === 'existing-customer';
  return (
    <div className="easy-connection__section">
      <div className="easyconnection-blurtitle">{` ${
        isExistingCustomer ? 'EXISTING CUSTOMER' : 'NEW CUSTOMER'
      } `}</div>
      <div className="easy-connection__title">
        <div className="easy-connection__title-item">{`${
          isExistingCustomer ? '5' : '4'
        } easy steps ${isExistingCustomer ? 'to relocate' : ''} `}</div>
        <div className="easy-connection__title-line" />
      </div>
      <div className="easy-connection">
        <div
          className={`easy-connection__left-section ${
            isExistingCustomer ? 'easy-connection__left-section__existing' : ''
          }`}
        >
          <div className="easy-connection__left-section-top">
            <div className="section-description">
              <div className="section-description__title">
                {Data.desc[0].title}
              </div>
              <div className="section-description__content">
                {Data.desc[0].content}
              </div>
            </div>
            <div className="description-curveline">
              <svg
                viewBox="0 0 160 110"
                style={{ maxHeight: 110, maxWidth: 210 }}
              >
                <path
                  d={`
                    M 0,100
                    S 45,35,150,70
                  `}
                  fill="none"
                  stroke="#fff"
                  strokeDasharray="4,4"
                  strokeWidth={1}
                />
                <circle cx="0" cy="100" r="4" />
                <circle cx="150" cy="70" r="4" />
              </svg>
            </div>
          </div>
          <div
            className={
              isExistingCustomer
                ? 'easy-connection__left-section-center'
                : 'easy-connection__left-section-down'
            }
          >
            <div className="section-description">
              <div className="section-description__title">
                {isExistingCustomer ? Data.desc[2].title : Data.desc[3].title}
              </div>
              <div className="section-description__content">
                {isExistingCustomer
                  ? Data.desc[2].content
                  : Data.desc[3].content}
              </div>
            </div>
            <div className="description-curveline">
              <svg
                viewBox="0 0 160 110"
                style={{ maxHeight: 110, maxWidth: 210 }}
              >
                <path
                  d={`
                    M 0,100
                    S 45,35,150,70
                  `}
                  fill="none"
                  stroke="#fff"
                  strokeDasharray="4,4"
                  strokeWidth={1}
                />
                <circle cx="0" cy="100" r="4" />
                <circle cx="150" cy="70" r="4" />
              </svg>
            </div>
          </div>
          {isExistingCustomer ? (
            <div className="easy-connection__left-section-down">
              <div className="section-description">
                <div className="section-description__title">
                  {Data.desc[4].title}
                </div>
                <div className="section-description__content">
                  {Data.desc[4].content}
                </div>
              </div>
              <div className="description-curveline">
                <svg
                  viewBox="0 0 160 110"
                  style={{ maxHeight: 110, maxWidth: 210 }}
                >
                  <path
                    d={`
                    M 0,100
                    S 45,35,150,70
                  `}
                    fill="none"
                    stroke="#fff"
                    strokeDasharray="4,4"
                    strokeWidth={1}
                  />
                  <circle cx="0" cy="100" r="4" />
                  <circle cx="150" cy="70" r="4" />
                </svg>
              </div>
            </div>
          ) : null}
        </div>
        <CircleLink
          ImgPaths={
            isExistingCustomer ? existingCustomerFavList : newCustomerFavList
          }
        />
        <div
          className={`easy-connection__right-section ${
            isExistingCustomer ? 'easy-connection__right-section__existing' : ''
          }`}
        >
          <div className="easy-connection__right-section-top">
            <div className="description-curveline">
              <svg
                viewBox="0 0 160 110"
                style={{ maxHeight: 110, maxWidth: 210 }}
              >
                <path
                  d={`
                    M 0,70
                    S 95,35,150,100
                  `}
                  fill="none"
                  stroke="#fff"
                  strokeDasharray="4,4"
                  strokeWidth={1}
                />
                <circle cx="0" cy="70" r="4" />
                <circle cx="150" cy="100" r="4" />
              </svg>
            </div>
            <div className="section-description">
              <div className="section-description__title">
                {isExistingCustomer ? Data.desc[1].title : Data.desc[1].title}
              </div>
              <div className="section-description__content">
                {isExistingCustomer
                  ? Data.desc[1].content
                  : Data.desc[1].content}
              </div>
            </div>
          </div>
          <div className="easy-connection__right-section-down">
            <div className="description-curveline">
              <svg
                viewBox="0 0 160 110"
                style={{ maxHeight: 110, maxWidth: 210 }}
              >
                <path
                  d={`
                  M 0,70
                  S 95,35,150,100
                  `}
                  fill="none"
                  stroke="#fff"
                  strokeDasharray="4,4"
                  strokeWidth={1}
                />
                <circle cx="0" cy="70" r="4" />
                <circle cx="150" cy="100" r="4" />
              </svg>
            </div>
            <div className="section-description">
              <div className="section-description__title">
                {isExistingCustomer ? Data.desc[3].title : Data.desc[4].title}
              </div>
              <div className="section-description__content">
                {isExistingCustomer
                  ? Data.desc[3].content
                  : Data.desc[4].content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EasyConnection.propTypes = {
  stepsType: PropTypes.string,
};

export default EasyConnection;
