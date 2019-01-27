import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DATA from './DATA';
import LogoImage from '../../assets/logo@3x.png';
import PhoneSvg from '../../assets/svgs/header-phone.svg';
import NavigationBar from '../home/NavigationBar';
import Container from '../../components/Container';

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

  mouseClicked(index) {
    this.setState({ flipped: true, selectedItem: index });
  }

  mouseLeave(index) {
    this.setState({ flipped: false });
  }

  render() {
    const { current } = this.props;
    const { flipped, selectedItem } = this.state;

    return (
      <div className="headerBar">
        <Container borderBottom="0.5px solid #d8d8d8">
          <div className="header">
            <div className="header-left">
              <div className="header-left__logo">
                <Link to="/">
                  <img src={LogoImage} alt="Riseonic" width="106px" />
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
                        onMouseDown={() => this.mouseClicked(index)}
                        onMouseLeave={() => this.mouseLeave(index)}
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
        </Container>
        <div
          style={{
            boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.08)',
            borderBottom: '1px solid #d8d8d8',
          }}
        >
          <div
            style={{
              width: '1440px',
              margin: 'auto',
            }}
          >
            <NavigationBar
              isViewable={flipped}
              items={DATA[selectedItem] ? DATA[selectedItem].submenu : []}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
