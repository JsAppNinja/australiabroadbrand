import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DATA from './DATA';
import LogoImage from 'assets/logo.png';
import PhoneSvg from 'assets/svgs/header-phone.svg';
import NavigationBar from '../NavigationBar';

import './style.scss';

const isCurrent = (to, current) => {
  if (to === '/' && current === to) {
    return true;
  } else if (to !== '/' && current.includes(to)) {
    return true;
  }

  return false;
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false,
      selectedItem: 0,
    };
  }

  mouseEnter(index) {
    this.setState({ flipped: true, selectedItem: index });
  }

  mouseLeave() {
    this.setState({ flipped: false, selectedItem: 0 });
  }

  render() {
    const { current } = this.props;
    const { flipped, selectedItem } = this.state;

    return (
      <div className="headerBar">
        <div className="header">
          <div className="header-left">
            <div className="header-left__logo">
              <Link to="/">
                <img src={LogoImage} alt="Riseonic" />
              </Link>
            </div>
            <div className="header-left__menu">
              <ul id="links">
                {DATA.map((item, index) => (
                  <li
                    key={index}
                    className={isCurrent(item.to, current) ? 'current' : ''}
                  >
                    <div
                      className="header-left__menu__item"
                      onMouseEnter={() => this.mouseEnter(index)}
                      onMouseLeave={() => this.mouseLeave()}
                    >
                      <Link to={item.to}>{item.text}</Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="header-right">
            <div className="header-right__terms">
              <ul className="header-right__items">
                <li
                  className={
                    isCurrent('/', current)
                      ? 'current header-right__items__phone'
                      : 'header-right__items__phone'
                  }
                >
                  <Link to="/">
                    <img src={PhoneSvg} alt="phone" />
                  </Link>
                </li>
                <li
                  className={
                    isCurrent('/login', current)
                      ? 'current header-right__items__login'
                      : 'header-right__items__login'
                  }
                >
                  <div>
                    <Link to="/login">Login</Link>
                  </div>
                </li>
                <li
                  className={
                    isCurrent('/support', current)
                      ? 'current header-right__items__support'
                      : 'header-right__items__support'
                  }
                >
                  <Link to="/support">Support</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <NavigationBar
          isViewable={flipped}
          items={DATA[selectedItem] ? DATA[selectedItem].submenu : []}
        />
      </div>
    );
  }
}

export default Header;
